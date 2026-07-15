#!/usr/bin/env node
/**
 * JSON-LD validation gate (MRS §72.1, §46.4).
 * Scans built HTML in dist/ and asserts:
 *   1. every <script type="application/ld+json"> parses as valid JSON;
 *   2. every YMYL template (condition, herb, topic, genomics, interactions, clinic)
 *      emits the medical schema types it is required to (reviewer-backed).
 * Exits non-zero on any failure so it can gate a build / CI.
 *
 * Usage: node scripts/validate-jsonld.mjs [distDir]   (default: ./dist)
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const DIST = process.argv[2] || 'dist';

// Required @type on a sample page of each YMYL template (dir under dist/).
const YMYL_REQUIRED = {
  'knowledge/health-conditions': ['MedicalWebPage'],
  'knowledge/herbs':             ['MedicalWebPage'],
  'knowledge/spices':            ['MedicalWebPage'],
  'knowledge/health-topics':     ['MedicalWebPage'],
  genomics:     ['MedicalWebPage', 'Gene', 'Physician'],
  interactions: ['MedicalWebPage', 'Drug', 'Physician'],
  clinic:       ['MedicalWebPage'],
};

function listHtml(dir) {
  // portable find (globSync patterns vary across node versions)
  return execSync(`find "${dir}" -name index.html -o -name '*.html'`, { encoding: 'utf8' })
    .split('\n').filter(Boolean);
}

function ldBlocks(html) {
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  const out = []; let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

let parsed = 0, files = 0, failures = [];

// 1. parse-validate every block across the whole site
for (const f of listHtml(DIST)) {
  files++;
  const html = readFileSync(f, 'utf8');
  for (const block of ldBlocks(html)) {
    try { JSON.parse(block); parsed++; }
    catch (e) { failures.push(`PARSE FAIL ${f}: ${e.message.slice(0, 80)}`); }
  }
}

// 2. required-type check on one sample page per YMYL template
for (const [tpl, required] of Object.entries(YMYL_REQUIRED)) {
  let sample;
  try { sample = execSync(`find "${join(DIST, tpl)}" -name index.html | head -1`, { encoding: 'utf8' }).trim(); }
  catch { sample = ''; }
  if (!sample) { failures.push(`NO SAMPLE for template "${tpl}" (dir missing under dist/)`); continue; }
  const types = new Set([...readFileSync(sample, 'utf8').matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map(m => m[1]));
  for (const t of required) {
    if (!types.has(t)) failures.push(`MISSING @type "${t}" on ${tpl} sample (${sample})`);
  }
}

console.log(`JSON-LD gate: scanned ${files} HTML files, ${parsed} JSON-LD blocks parsed OK.`);
if (failures.length) {
  console.error(`\n✗ ${failures.length} failure(s):`);
  for (const f of failures) console.error('  - ' + f);
  process.exit(1);
}
console.log('✓ All JSON-LD valid and every YMYL template carries its required medical schema.');
