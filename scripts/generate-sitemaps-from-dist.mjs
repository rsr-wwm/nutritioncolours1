import fs from 'node:fs';
import path from 'node:path';
import { exactSameOrigin, SITE_ORIGIN } from './lib/output-policy.mjs';

const distDir = path.resolve(process.argv[2] || 'dist');
const siteOrigin = SITE_ORIGIN;

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function readMeta(html, name) {
  const patterns = [
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+name=["']${name}["']`, 'i'),
  ];
  for (const pattern of patterns) {
    const value = html.match(pattern)?.[1];
    if (value) return value;
  }
  return '';
}

function readCanonical(html) {
  return html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    || '';
}

function escapeXml(value) {
  return value.replace(/[<>&"']/g, (char) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
  })[char]);
}

if (!fs.existsSync(distDir)) {
  console.error(`Missing build directory: ${distDir}`);
  process.exit(1);
}

const urls = new Set();
for (const file of walk(distDir)) {
  if (path.basename(file) === '404.html') continue;
  const html = fs.readFileSync(file, 'utf8');
  if (/\bnoindex\b/i.test(readMeta(html, 'robots'))) continue;
  const canonical = readCanonical(html);
  if (!canonical || !exactSameOrigin(canonical, siteOrigin)) {
    console.error(`Indexable page has no same-origin canonical: ${path.relative(distDir, file)}`);
    process.exitCode = 1;
    continue;
  }
  urls.add(canonical.replace(/\/$/, '') || siteOrigin);
}

if (process.exitCode) process.exit(process.exitCode);

const ordered = [...urls].sort();
const urlset = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ordered.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

const index = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  `  <sitemap><loc>${siteOrigin}/sitemap-core.xml</loc></sitemap>`,
  '</sitemapindex>',
  '',
].join('\n');

fs.writeFileSync(path.join(distDir, 'sitemap-core.xml'), urlset);
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), index);
console.log(`Generated sitemap from ${ordered.length} built, indexable canonical URLs (no synthetic lastmod).`);
