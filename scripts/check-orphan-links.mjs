#!/usr/bin/env node
/**
 * Orphan internal-link checker (MRS §44.5).
 * Builds the internal-link graph from built HTML and reports pages with fewer than
 * MIN_INLINKS inbound internal links (excluding nav/footer chrome links, which appear
 * on every page and would mask true orphans).
 *
 * Reports as a warning by default (informational); pass --strict to exit non-zero.
 * Usage: node scripts/check-orphan-links.mjs [distDir] [--strict]
 */
import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const DIST = args.find((a) => !a.startsWith('--')) || 'dist';
const MIN_INLINKS = 2;

// Links that appear site-wide (header/footer/nav) — exclude so they don't mask orphans.
const CHROME = new Set([
  '/', '/plans', '/about', '/team', '/contact', '/connect', '/clinics', '/recipes',
  '/tools', '/testimonials', '/history', '/knowledge/health-topics',
  '/knowledge/health-conditions', '/knowledge/herbs', '/knowledge/spices', '/knowledge/glossary',
  '/knowledge/nutrigenomics', '/knowledge/drug-interactions', '/knowledge/blogs',
  '/knowledge/vegan', '/legal/privacy', '/legal/terms', '/legal/methodology',
  '/legal/editorial-policy',
]);

const files = execSync(`find "${DIST}" -name index.html`, { encoding: 'utf8' }).split('\n').filter(Boolean);

// Map file -> route
const routeOf = (f) => '/' + f.replace(new RegExp(`^${DIST}/`), '').replace(/\/index\.html$/, '').replace(/index\.html$/, '');

const inbound = new Map(); // route -> Set of source routes
for (const f of files) inbound.set(routeOf(f), new Set());

for (const f of files) {
  const src = routeOf(f);
  let html = readFileSync(f, 'utf8');
  // strip header/nav/footer so we count contextual body links, not chrome
  html = html.replace(/<header[\s\S]*?<\/header>/gi, '').replace(/<footer[\s\S]*?<\/footer>/gi, '').replace(/<nav[\s\S]*?<\/nav>/gi, '');
  const hrefs = [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, '') || '/');
  for (const h of new Set(hrefs)) {
    if (h === src) continue;
    if (CHROME.has(h)) continue;
    if (inbound.has(h)) inbound.get(h).add(src);
  }
}

const orphans = [];
for (const [route, sources] of inbound) {
  if (CHROME.has(route)) continue;
  if (sources.size < MIN_INLINKS) orphans.push({ route, inlinks: sources.size });
}
orphans.sort((a, b) => a.inlinks - b.inlinks);

// group by top-level segment for a readable summary
const byType = {};
for (const o of orphans) { const t = o.route.split('/')[1] || '(root)'; byType[t] = (byType[t] || 0) + 1; }

console.log(`Orphan-link check: ${files.length} pages, ${orphans.length} with < ${MIN_INLINKS} contextual internal inlinks.`);
console.log('By section:', Object.entries(byType).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k}=${v}`).join(' '));
console.log('Sample:', orphans.slice(0, 12).map((o) => `${o.route}(${o.inlinks})`).join(', '));
if (strict && orphans.length) process.exit(1);
