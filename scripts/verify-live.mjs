import fs from 'node:fs';
import path from 'node:path';
import { FORBIDDEN_SCHEMA_TYPES, SITE_ORIGIN } from './lib/output-policy.mjs';

const targetOrigin = normalizeOrigin(process.env.LIVE_SITE_URL || SITE_ORIGIN, 'LIVE_SITE_URL');
const expectedCanonicalOrigin = normalizeOrigin(process.env.LIVE_EXPECTED_ORIGIN || SITE_ORIGIN, 'LIVE_EXPECTED_ORIGIN');
const timeoutMs = positiveInteger(process.env.LIVE_VERIFY_TIMEOUT_MS, 15_000);
const maxPages = positiveInteger(process.env.LIVE_VERIFY_MAX_PAGES, 100);
const maxSitemaps = positiveInteger(process.env.LIVE_VERIFY_MAX_SITEMAPS, 20);
const compareDist = process.env.LIVE_COMPARE_DIST === '1' || process.argv.includes('--compare-dist');
const failures = [];
const warnings = [];
const missingSecurityHeaders = new Map();
const forbiddenSchemaUsage = new Map();

function positiveInteger(value, fallback) {
  if (value === undefined) return fallback;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isSafeInteger(parsed) || parsed <= 0) throw new Error(`Expected a positive integer, received ${value}`);
  return parsed;
}

function normalizeOrigin(value, label) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`${label} must be an absolute URL`);
  }
  const local = ['localhost', '127.0.0.1', '::1'].includes(url.hostname);
  if (url.protocol !== 'https:' && !(local && url.protocol === 'http:')) throw new Error(`${label} must use HTTPS (HTTP is allowed only for localhost)`);
  if (url.username || url.password || url.search || url.hash || !['', '/'].includes(url.pathname)) throw new Error(`${label} must be a credentials-free origin without a path, query, or fragment`);
  return url.origin;
}

function targetUrl(pathname) {
  return new URL(pathname, `${targetOrigin}/`).href;
}

async function request(pathname, { expectedStatus = 200 } = {}) {
  const url = targetUrl(pathname);
  let response;
  try {
    response = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'NutritionColours-Live-Release-Verifier/1.0' },
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (error) {
    failures.push(`${pathname}: request failed (${error.message})`);
    return null;
  }
  if (response.status !== expectedStatus) failures.push(`${pathname}: expected HTTP ${expectedStatus}, received ${response.status}`);
  return response;
}

function attributes(tag) {
  const result = {};
  for (const match of tag.matchAll(/([^\s=/>]+)\s*=\s*(["'])(.*?)\2/g)) result[match[1].toLowerCase()] = match[3];
  return result;
}

function canonicalFrom(html) {
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    const attrs = attributes(tag);
    if ((attrs.rel || '').toLowerCase().split(/\s+/).includes('canonical')) return attrs.href || null;
  }
  return null;
}

function robotsDirectives(html) {
  const directives = [];
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    const attrs = attributes(tag);
    if (['robots', 'googlebot', 'bingbot'].includes((attrs.name || '').toLowerCase())) directives.push((attrs.content || '').toLowerCase());
  }
  return directives.join(',');
}

function schemaTypes(value, result = []) {
  if (Array.isArray(value)) for (const item of value) schemaTypes(item, result);
  else if (value && typeof value === 'object') {
    const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
    for (const type of types.filter(Boolean)) result.push(type);
    for (const child of Object.values(value)) schemaTypes(child, result);
  }
  return result;
}

function validateSecurityHeaders(response, pathname) {
  for (const header of ['content-security-policy', 'x-content-type-options', 'referrer-policy']) {
    if (!response.headers.get(header)) {
      if (!missingSecurityHeaders.has(header)) missingSecurityHeaders.set(header, []);
      missingSecurityHeaders.get(header).push(pathname);
    }
  }
  if (targetOrigin.startsWith('https://') && !response.headers.get('strict-transport-security')) {
    if (!missingSecurityHeaders.has('strict-transport-security')) missingSecurityHeaders.set('strict-transport-security', []);
    missingSecurityHeaders.get('strict-transport-security').push(pathname);
  }
}

function equivalentCanonical(actual, expected) {
  try {
    const actualUrl = new URL(actual);
    const expectedUrl = new URL(expected);
    return !actualUrl.username && !actualUrl.password && actualUrl.href === expectedUrl.href;
  } catch {
    return false;
  }
}

async function validateHtmlPage(canonicalUrl, expectedIndexPolicy = 'index') {
  const canonical = new URL(canonicalUrl);
  const pathname = `${canonical.pathname}${canonical.search}`;
  const response = await request(pathname);
  if (!response) return;
  validateSecurityHeaders(response, pathname);
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.toLowerCase().includes('text/html')) failures.push(`${pathname}: expected text/html, received ${contentType || 'no content-type'}`);
  const html = await response.text();
  if (!html.trim()) {
    failures.push(`${pathname}: empty HTML response`);
    return;
  }
  const actualCanonical = canonicalFrom(html);
  if (!equivalentCanonical(actualCanonical, canonicalUrl)) failures.push(`${pathname}: canonical is ${actualCanonical || 'missing'}, expected ${new URL(canonicalUrl).href}`);
  const robots = `${robotsDirectives(html)},${response.headers.get('x-robots-tag') || ''}`.toLowerCase();
  if (expectedIndexPolicy === 'index' && /(?:^|[,\s])noindex(?:[,\s]|$)/.test(robots)) failures.push(`${pathname}: sitemap URL is noindex`);
  if (expectedIndexPolicy === 'noindex' && !/(?:^|[,\s])noindex(?:[,\s]|$)/.test(robots)) failures.push(`${pathname}: expected noindex but no noindex directive was found`);
  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) failures.push(`${pathname}: expected exactly one H1, found ${h1Count}`);
  if (!/<title>[^<]{10,}<\/title>/i.test(html)) failures.push(`${pathname}: missing or implausibly short title`);
  for (const [index, match] of [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].entries()) {
    try {
      const parsed = JSON.parse(match[1]);
      for (const type of schemaTypes(parsed)) if (FORBIDDEN_SCHEMA_TYPES.has(type)) {
        if (!forbiddenSchemaUsage.has(type)) forbiddenSchemaUsage.set(type, []);
        forbiddenSchemaUsage.get(type).push(`${pathname}#jsonld-${index + 1}`);
      }
    } catch (error) {
      failures.push(`${pathname}: invalid JSON-LD block ${index + 1} (${error.message})`);
    }
  }
}

const robotsResponse = await request('/robots.txt');
if (robotsResponse) {
  const robots = await robotsResponse.text();
  if (!robots.includes(`Sitemap: ${expectedCanonicalOrigin}/sitemap.xml`)) failures.push('/robots.txt: canonical sitemap declaration is missing or incorrect');
}

function validateSitemapLoc(value, label) {
  try {
    const url = new URL(value);
    if (url.origin !== expectedCanonicalOrigin || url.username || url.password || url.search || url.hash) {
      failures.push(`${label}: unsafe or non-canonical URL ${value}`);
      return null;
    }
    return url;
  } catch {
    failures.push(`${label}: invalid URL ${value}`);
    return null;
  }
}

const seenSitemaps = new Set();
async function collectSitemap(pathname, depth = 0) {
  if (depth > 2) {
    failures.push(`${pathname}: sitemap nesting exceeds two levels`);
    return [];
  }
  if (seenSitemaps.has(pathname)) {
    failures.push(`${pathname}: sitemap cycle or duplicate sitemap reference`);
    return [];
  }
  seenSitemaps.add(pathname);
  if (seenSitemaps.size > maxSitemaps) {
    failures.push(`${pathname}: sitemap count exceeds LIVE_VERIFY_MAX_SITEMAPS=${maxSitemaps}`);
    return [];
  }
  const response = await request(pathname);
  if (!response) return [];
  const xml = await response.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  if (!locs.length) failures.push(`${pathname}: no <loc> URLs found`);
  if (/<sitemapindex\b/i.test(xml)) {
    const childUrls = [];
    for (const value of locs) {
      const url = validateSitemapLoc(value, pathname);
      if (url) childUrls.push(...await collectSitemap(url.pathname, depth + 1));
    }
    return childUrls;
  }
  if (!/<urlset\b/i.test(xml)) {
    failures.push(`${pathname}: XML is neither a sitemap index nor a URL set`);
    return [];
  }
  return locs.filter((value) => validateSitemapLoc(value, pathname));
}

let sitemapUrls = await collectSitemap('/sitemap.xml');
if (sitemapUrls.length) {
  if (sitemapUrls.length > maxPages) failures.push(`/sitemap.xml: ${sitemapUrls.length} page URLs exceed LIVE_VERIFY_MAX_PAGES=${maxPages}; this can indicate index bloat or requires an explicitly larger audit cap`);
  const unique = new Set(sitemapUrls);
  if (unique.size !== sitemapUrls.length) failures.push('/sitemap.xml: duplicate page URLs found across sitemap files');
  const locationUrls = sitemapUrls.filter((value) => {
    try { return /^\/(?:locations|clinic)(?:\/|$)/.test(new URL(value).pathname); } catch { return false; }
  });
  if (locationUrls.length) failures.push(`/sitemap.xml: ${locationUrls.length} prohibited physical/locality URLs are published for an online-only service (examples: ${locationUrls.slice(0, 3).join(', ')})`);
}

const llmsResponse = await request('/llms.txt');
if (llmsResponse && !(await llmsResponse.text()).trim()) failures.push('/llms.txt: empty response');

for (const value of sitemapUrls.slice(0, maxPages)) await validateHtmlPage(value, 'index');

let approved = { records: [] };
try {
  approved = JSON.parse(fs.readFileSync('data/publishing/approved-leaves.json', 'utf8'));
} catch (error) {
  warnings.push(`Could not read local approved projection (${error.message}); hub-policy probes were skipped.`);
}
if (Array.isArray(approved.records)) {
  const healthCount = approved.records.filter((row) => row.pageKind === 'health').length;
  const foodCount = approved.records.filter((row) => row.pageKind === 'food').length;
  if (healthCount === 0) await validateHtmlPage(`${expectedCanonicalOrigin}/health`, 'noindex');
  if (foodCount === 0) await validateHtmlPage(`${expectedCanonicalOrigin}/foods`, 'noindex');
}
await validateHtmlPage(`${expectedCanonicalOrigin}/search`, 'noindex');
await validateHtmlPage(`${expectedCanonicalOrigin}/services/online-nutrition`, 'noindex');

const retiredTrap = await request('/honeypot/trap/index.html', { expectedStatus: 404 });
if (retiredTrap?.status === 200) failures.push('/honeypot/trap/index.html: retired deceptive trap is still publicly reachable');

if (compareDist) {
  if (!fs.existsSync('dist')) failures.push('LIVE_COMPARE_DIST=1 but dist/ does not exist; run npm run build first');
  else {
    const expected = new Set();
    for (const file of fs.readdirSync('dist', { recursive: true }).filter((value) => String(value).endsWith('.html'))) {
      const html = fs.readFileSync(path.join('dist', String(file)), 'utf8');
      const canonical = canonicalFrom(html);
      if (canonical && !/(?:^|[,\s])noindex(?:[,\s]|$)/.test(robotsDirectives(html))) expected.add(canonical);
    }
    const live = new Set(sitemapUrls);
    for (const url of expected) if (!live.has(url)) failures.push(`live/local parity: built indexable canonical missing from live sitemap: ${url}`);
    for (const url of live) if (!expected.has(url)) failures.push(`live/local parity: live sitemap URL missing from current built indexable set: ${url}`);
  }
}

for (const [header, paths] of missingSecurityHeaders) failures.push(`${header}: missing on ${paths.length} checked HTML response(s) (examples: ${paths.slice(0, 5).join(', ')})`);
for (const [type, locations] of forbiddenSchemaUsage) failures.push(`JSON-LD @type ${type}: ${locations.length} unverified occurrence(s) on checked pages (examples: ${locations.slice(0, 5).join(', ')})`);

for (const warning of warnings) console.warn(`Warning: ${warning}`);
if (failures.length) {
  console.error(`Live verification failed (${failures.length}):`);
  for (const failure of failures.slice(0, 100)) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`Live verification passed: ${sitemapUrls.length} sitemap URLs plus required noindex/status surfaces checked at ${targetOrigin}.`);
console.log('This verifies deployed technical parity; it does not certify medical claims, legal compliance, accessibility, rankings, or field CWV.');
