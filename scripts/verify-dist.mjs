import fs from 'node:fs';
import path from 'node:path';
import { exactSameOrigin, FORBIDDEN_SCHEMA_TYPES, SITE_ORIGIN, unsafeHrefScheme } from './lib/output-policy.mjs';

const dist = path.resolve(process.argv[2] || 'dist');
const origin = SITE_ORIGIN;
const failures = [];
const warnings = [];
const approvedProjectionPath = path.resolve(process.cwd(), 'data/publishing/approved-leaves.json');
let approvedLeafRoutes = new Set();
try {
  const projection = JSON.parse(fs.readFileSync(approvedProjectionPath, 'utf8'));
  approvedLeafRoutes = new Set((projection.records || []).map((record) => record.canonicalPath));
} catch (error) {
  failures.push(`cannot read approved leaf projection for route parity: ${error.message}`);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
function attr(html, tag, name, value, wanted) {
  const tags = html.match(new RegExp(`<${tag}\\b[^>]*>`, 'gi')) || [];
  for (const candidate of tags) {
    if (new RegExp(`\\b${name}=["']${value}["']`, 'i').test(candidate)) {
      return candidate.match(new RegExp(`\\b${wanted}=["']([^"']*)["']`, 'i'))?.[1] || '';
    }
  }
  return '';
}
function routeFor(file) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  return `/${rel.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
}
function targetExists(urlPath) {
  let decoded;
  try { decoded = decodeURIComponent(urlPath); } catch { return false; }
  const clean = decoded.replace(/^\/+/, '').replace(/\/$/, '');
  if (!clean) return fs.existsSync(path.join(dist, 'index.html'));
  return fs.existsSync(path.join(dist, clean)) || fs.existsSync(path.join(dist, clean, 'index.html')) || fs.existsSync(path.join(dist, `${clean}.html`));
}
function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
}
function collectTypes(value, out = []) {
  if (Array.isArray(value)) value.forEach((item) => collectTypes(item, out));
  else if (value && typeof value === 'object') {
    if (typeof value['@type'] === 'string') out.push(value['@type']);
    else if (Array.isArray(value['@type'])) out.push(...value['@type']);
    Object.values(value).forEach((item) => collectTypes(item, out));
  }
  return out;
}
function assetClosure(assetUrls) {
  const seen = new Set();
  const queue = [...assetUrls];
  while (queue.length) {
    const assetUrl = queue.shift().split(/[?#]/)[0];
    if (seen.has(assetUrl) || !/^\/(?:_astro|assets)\//.test(assetUrl)) continue;
    const file = path.join(dist, assetUrl.replace(/^\//, ''));
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) continue;
    seen.add(assetUrl);
    if (!/\.(?:js|css)$/.test(assetUrl)) continue;
    const source = fs.readFileSync(file, 'utf8');
    const imports = assetUrl.endsWith('.js')
      ? [...source.matchAll(/(?:from\s*|import\s*)["']([^"']+\.(?:js|css))["']/g)].map((match) => match[1])
      : [...source.matchAll(/@import\s+["']([^"']+\.css)["']/g)].map((match) => match[1]);
    for (const imported of imports) {
      try { queue.push(new URL(imported, `https://nutritioncolours.com${assetUrl}`).pathname); } catch { /* malformed imports are handled by the bundler */ }
    }
  }
  return seen;
}

if (!fs.existsSync(dist)) {
  console.error(`Missing build directory: ${dist}`);
  process.exit(1);
}

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const htmlByRoute = new Map(htmlFiles.map((file) => [routeFor(file).replace(/\/$/, '') || '/', fs.readFileSync(file, 'utf8')]));
const canonicals = new Map();
const indexableTitles = new Map();
const indexableDescriptions = new Map();
const indexable = new Set();
let parsedJsonLd = 0;
let checkedLinks = 0;

for (const file of htmlFiles) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  const html = fs.readFileSync(file, 'utf8');
  if (rel === '404.html') continue;
  const route = routeFor(file);
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim() || '';
  const description = attr(html, 'meta', 'name', 'description', 'content');
  const robots = attr(html, 'meta', 'name', 'robots', 'content');
  const googlebot = attr(html, 'meta', 'name', 'googlebot', 'content');
  const bingbot = attr(html, 'meta', 'name', 'bingbot', 'content');
  const canonical = attr(html, 'link', 'rel', 'canonical', 'href');
  const ogUrl = attr(html, 'meta', 'property', 'og:url', 'content');
  const ogImage = attr(html, 'meta', 'property', 'og:image', 'content');
  const noindex = /\bnoindex\b/i.test(robots);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  const mainCount = (html.match(/<main\b/gi) || []).length;
  const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  const headingLevels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));

  if (route === '/locations' || route.startsWith('/locations/')) {
    failures.push(`${rel}: locality route published without an approved online-service location policy`);
  }
  const isPriorityLeafRoute = /^\/(?:health|foods)\/[^/]+$/.test(route);
  if (isPriorityLeafRoute && noindex) failures.push(`${rel}: priority leaf route is noindex; only approved projection records may create leaf-shaped routes`);
  if (isPriorityLeafRoute && !approvedLeafRoutes.has(route)) failures.push(`${rel}: priority leaf route is absent from approved projection`);

  if (!/<html[^>]+lang=["'][a-z-]+["']/i.test(html)) failures.push(`${rel}: missing html lang`);
  if (!title) failures.push(`${rel}: missing title`);
  if (!description) failures.push(`${rel}: missing meta description`);
  if (!robots) failures.push(`${rel}: missing robots directive`);
  if (!googlebot) failures.push(`${rel}: missing googlebot directive`);
  if (!bingbot) failures.push(`${rel}: missing bingbot directive`);
  if (googlebot && (/\bnoindex\b/i.test(googlebot) !== noindex)) failures.push(`${rel}: googlebot directive disagrees with robots`);
  if (bingbot && (/\bnoindex\b/i.test(bingbot) !== noindex)) failures.push(`${rel}: bingbot directive disagrees with robots`);
  // A string-prefix check is not an origin check: https://nutritioncolours.com.evil
  // must never be accepted as our canonical host.
  if (!exactSameOrigin(canonical, origin)) failures.push(`${rel}: canonical must use the exact site origin`);
  if (ogUrl && (!exactSameOrigin(ogUrl, origin) || ogUrl.replace(/\/$/, '') !== canonical.replace(/\/$/, ''))) failures.push(`${rel}: og:url must equal the canonical URL`);
  if (ogImage && !exactSameOrigin(ogImage, origin)) failures.push(`${rel}: og:image must remain same-origin`);
  if (/example\.com/i.test(html)) failures.push(`${rel}: contains placeholder hostname`);
  if (mainCount !== 1) failures.push(`${rel}: page has ${mainCount} main landmarks (expected 1)`);
  if (h1Count !== 1) failures.push(`${rel}: page has ${h1Count} H1 elements (expected 1)`);
  if (duplicateIds.length) failures.push(`${rel}: duplicate element ids: ${duplicateIds.join(', ')}`);
  for (let index = 1; index < headingLevels.length; index++) {
    if (headingLevels[index] > headingLevels[index - 1] + 1) failures.push(`${rel}: heading level jumps from H${headingLevels[index - 1]} to H${headingLevels[index]}`);
  }
  if (!noindex) {
    if (title.length < 20 || title.length > 70) failures.push(`${rel}: indexable title must be 20-70 characters (found ${title.length})`);
    if (description.length < 70 || description.length > 180) failures.push(`${rel}: indexable meta description must be 70-180 characters (found ${description.length})`);
    if (indexableTitles.has(title)) failures.push(`${rel}: duplicate indexable title also used by ${indexableTitles.get(title)}`);
    else indexableTitles.set(title, rel);
    if (indexableDescriptions.has(description)) failures.push(`${rel}: duplicate indexable meta description also used by ${indexableDescriptions.get(description)}`);
    else indexableDescriptions.set(description, rel);
    indexable.add(canonical.replace(/\/$/, '') || origin);
    const expected = route === '/' ? `${origin}/` : `${origin}${route}`;
    if (canonical !== expected) failures.push(`${rel}: canonical ${canonical} does not match route ${expected}`);
  }
  if (canonicals.has(canonical)) failures.push(`${rel}: duplicate canonical also used by ${canonicals.get(canonical)}`);
  else canonicals.set(canonical, rel);

  for (const block of jsonLdBlocks(html)) {
    try {
      const parsed = JSON.parse(block);
      parsedJsonLd++;
      for (const type of collectTypes(parsed)) if (FORBIDDEN_SCHEMA_TYPES.has(type)) failures.push(`${rel}: unverified JSON-LD type ${type}`);
    } catch (error) { failures.push(`${rel}: invalid JSON-LD (${error.message})`); }
  }

  for (const match of html.matchAll(/<a\b([^>]*)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const href = match[2];
    const attributes = `${match[1]} ${match[3]}`;
    const accessibleText = match[4].replace(/<[^>]+>/g, ' ').replace(/&(?:#\d+|#x[0-9a-f]+|\w+);/gi, ' ').replace(/\s+/g, ' ').trim();
    const ariaLabel = attributes.match(/\baria-label=["']([^"']+)["']/i)?.[1]?.trim();
    const imageAlt = match[4].match(/<img\b[^>]*\balt=["']([^"']+)["']/i)?.[1]?.trim();
    if (!accessibleText && !ariaLabel && !imageAlt) failures.push(`${rel}: link has no accessible name (${href})`);
    if (/^(mailto:|tel:)/i.test(href)) continue;
    let url;
    try { url = new URL(href, `${origin}${route}`); } catch { failures.push(`${rel}: invalid href ${href}`); continue; }
    const unsafeScheme = unsafeHrefScheme(href);
    if (unsafeScheme) failures.push(`${rel}: unsafe link scheme ${unsafeScheme}`);
    if (url.origin === origin && !targetExists(url.pathname)) failures.push(`${rel}: broken internal link ${url.pathname}`);
    if (url.origin === origin && url.hash) {
      let fragment;
      try { fragment = decodeURIComponent(url.hash.slice(1)); } catch { fragment = ''; }
      const targetRoute = url.pathname.replace(/\/$/, '') || '/';
      const targetHtml = htmlByRoute.get(targetRoute);
      if (fragment && targetHtml && !new RegExp(`\\bid=["']${fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'i').test(targetHtml)) {
        failures.push(`${rel}: broken fragment link ${url.pathname}${url.hash}`);
      }
    }
    checkedLinks++;
  }
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/\balt=["'][^"']*["']/i.test(tag)) failures.push(`${rel}: image missing alt`);
    const src = tag.match(/\bsrc=["']([^"']+)["']/i)?.[1];
    if (src?.startsWith('/') && !targetExists(src.split(/[?#]/)[0])) failures.push(`${rel}: missing image ${src}`);
  }
  for (const match of html.matchAll(/<form\b([^>]*)>/gi)) {
    const action = match[1].match(/\baction=["']([^"']+)["']/i)?.[1];
    if (!action) continue;
    try {
      if (new URL(action, `${origin}${route}`).origin !== origin) failures.push(`${rel}: form action must remain same-origin`);
    } catch {
      failures.push(`${rel}: form action is invalid`);
    }
  }
  if (/>\s*undefined\s*</i.test(html) || /=["']undefined["']/i.test(html) || /\bclass=["'][^"']*\bundefined\b/i.test(html)) failures.push(`${rel}: rendered undefined value`);

  const initialAssets = [...html.matchAll(/(?:src|href|component-url|renderer-url)=["'](\/(?:_astro|assets)\/[^"']+\.(?:js|css))["']/gi)].map((match) => match[1]);
  const assets = assetClosure(initialAssets);
  const jsBytes = [...assets].filter((url) => url.endsWith('.js')).reduce((sum, url) => sum + (fs.statSync(path.join(dist, url.replace(/^\//, ''))).size || 0), 0);
  const cssBytes = [...assets].filter((url) => url.endsWith('.css')).reduce((sum, url) => sum + (fs.statSync(path.join(dist, url.replace(/^\//, ''))).size || 0), 0);
  const isPriorityLeaf = !noindex && (/^\/health\/[^/]+$/.test(route) || /^\/foods\/[^/]+$/.test(route));
  if (!noindex && jsBytes > 200_000) failures.push(`${rel}: referenced JS ${jsBytes} bytes exceeds 200 KB raw budget`);
  if (!noindex && cssBytes > 120_000) failures.push(`${rel}: referenced CSS ${cssBytes} bytes exceeds 120 KB raw budget`);
  if (isPriorityLeaf && jsBytes > 75_000) failures.push(`${rel}: priority leaf JS ${jsBytes} bytes exceeds 75 KB raw budget`);
  if (isPriorityLeaf && cssBytes > 80_000) failures.push(`${rel}: priority leaf CSS ${cssBytes} bytes exceeds 80 KB raw budget`);
  if (isPriorityLeaf && Buffer.byteLength(html) > 200_000) failures.push(`${rel}: priority leaf HTML exceeds 200 KB raw budget`);
  if (isPriorityLeaf && (html.match(/<[a-z][^>]*>/gi) || []).length > 1_500) failures.push(`${rel}: priority leaf DOM exceeds 1,500 elements`);
}

for (const file of files.filter((item) => item.endsWith('.json'))) {
  try { JSON.parse(fs.readFileSync(file, 'utf8')); } catch (error) { failures.push(`${path.relative(dist, file)}: invalid public JSON (${error.message})`); }
}

for (const route of approvedLeafRoutes) {
  if (!htmlByRoute.has(route.replace(/\/$/, '') || '/')) failures.push(`approved projection route is missing from generated HTML: ${route}`);
}

const sitemapPath = path.join(dist, 'sitemap-core.xml');
if (!fs.existsSync(sitemapPath)) failures.push('missing sitemap-core.xml');
else {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replace(/&amp;/g, '&')));
  if (/<lastmod>/i.test(xml)) failures.push('sitemap contains synthetic lastmod');
  for (const url of indexable) if (!sitemapUrls.has(url)) failures.push(`indexable canonical missing from sitemap: ${url}`);
  for (const url of sitemapUrls) if (!indexable.has(url)) failures.push(`sitemap URL is not an indexable canonical: ${url}`);
}

const uniqueFailures = [...new Set(failures)];
console.log(`Generated-output gate: ${htmlFiles.length} HTML files, ${indexable.size} indexable canonicals, ${parsedJsonLd} JSON-LD blocks, ${checkedLinks} internal links.`);
if (warnings.length) console.warn(`Structural warnings on quarantined pages: ${warnings.length} (not asserted as WCAG conformance).`);
if (uniqueFailures.length) {
  console.error(`Verification failed (${uniqueFailures.length} unique issues):`);
  uniqueFailures.slice(0, 200).forEach((failure) => console.error(`- ${failure}`));
  if (uniqueFailures.length > 200) console.error(`- ... ${uniqueFailures.length - 200} more`);
  process.exit(1);
}
console.log('Generated-output gate passed. This is a structural/release check, not a claim of legal, clinical, or WCAG certification.');
