import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import YAML from 'yaml';
import { REGISTRY_SCHEMA_VERSION, cohortFor, inspectLeaf, normalizePath, registrySummary, validateRegistry } from './lib/leaf-publishing-policy.mjs';

const root = process.cwd();
const knowledgeRoot = path.join(root, 'src/content/knowledge');
const registryPath = path.join(root, 'data/publishing/leaf-registry.json');
const duplicatesPath = path.join(root, 'data/publishing/leaf-duplicate-candidates.json');
const reportPath = path.join(root, 'docs/execution/LEAF_READINESS_AUDIT_2026-08-21.md');
const checkOnly = process.argv.includes('--check');

function normalizedText(value) {
  return String(value || '').normalize('NFKD').replace(/\p{M}+/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

function entityHead(value) {
  return normalizedText(String(value || '').split(/[:—|]/, 1)[0].replace(/\([^)]*\)/g, ' '));
}

function candidateGroups(rows, signal, keyFor) {
  const grouped = new Map();
  for (const row of rows) {
    const key = keyFor(row);
    if (!key) continue;
    const bucket = grouped.get(key) || [];
    bucket.push(row);
    grouped.set(key, bucket);
  }
  return [...grouped.entries()]
    .filter(([, members]) => members.length > 1)
    .map(([key, members]) => ({
      groupId: `duplicate-${crypto.createHash('sha256').update(`${signal}:${key}`).digest('hex').slice(0, 16)}`,
      signal,
      normalizedKey: key,
      memberCount: members.length,
      members: members.map((member) => ({
        legacyId: member.legacyId,
        pageKind: member.pageKind,
        sourcePath: member.sourcePath,
        title: member.title,
        legacySlug: member.legacySlug,
      })),
    }))
    .sort((a, b) => b.memberCount - a.memberCount || a.normalizedKey.localeCompare(b.normalizedKey));
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function parseMarkdown(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return { frontmatter: {}, body: raw, parseError: 'missing YAML frontmatter' };
  try {
    return { frontmatter: YAML.parse(match[1]) || {}, body: raw.slice(match[0].length), parseError: null };
  } catch (error) {
    return { frontmatter: {}, body: raw.slice(match[0].length), parseError: error.message };
  }
}

const records = [];
for (const file of walk(knowledgeRoot).filter((candidate) => candidate.endsWith('.md')).sort()) {
  const relativePath = normalizePath(path.relative(knowledgeRoot, file));
  if (!cohortFor(relativePath)) continue;
  const parsed = parseMarkdown(file);
  const record = inspectLeaf({ relativePath, frontmatter: parsed.frontmatter, body: parsed.body });
  if (parsed.parseError) {
    record.preliminaryMachineEligible = false;
    record.preliminaryReasons = [...new Set([...record.preliminaryReasons, 'FRONTMATTER_PARSE_ERROR'])].sort();
    record.diagnostics.frontmatterParseError = parsed.parseError;
  }
  records.push(record);
}

records.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));
const registry = {
  schemaVersion: REGISTRY_SCHEMA_VERSION,
  purpose: 'Quarantined inventory. Presence does not authorize routing, indexing, claims, schema, feeds, or social distribution.',
  summary: registrySummary(records),
  records,
};
const duplicateCandidates = {
  schemaVersion: REGISTRY_SCHEMA_VERSION,
  purpose: 'Review candidates only. Similarity signals never authorize merge, redirect, canonical, taxonomy, or publication decisions.',
  groups: [
    ...candidateGroups(records, 'EXACT_NORMALIZED_TITLE', (record) => `${record.pageKind}:${normalizedText(record.title)}`),
    ...candidateGroups(records, 'ENTITY_HEAD', (record) => {
      const key = entityHead(record.title);
      return key.length >= 4 ? key : '';
    }),
    ...candidateGroups(records, 'SAME_KIND_SLUG', (record) => `${record.pageKind}:${normalizedText(record.legacySlug)}`),
    ...candidateGroups(records, 'EXACT_NORMALIZED_DESCRIPTION', (record) => {
      const key = normalizedText(record.description);
      return key.length >= 24 ? `${record.pageKind}:${key}` : '';
    }),
  ],
};

const validationErrors = validateRegistry(registry);
if (validationErrors.length) {
  console.error(`Generated registry is invalid (${validationErrors.length}):`);
  validationErrors.slice(0, 100).forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

function markdownReport(value) {
  const lines = [
    '# Leaf Readiness Audit', '',
    '**Scope:** quarantined health and food Markdown under `src/content/knowledge`  ',
    '**Policy:** automated readiness is only a triage signal; it never authorizes publication  ',
    '**Registry:** `data/publishing/leaf-registry.json`', '',
    '## Result', '',
    '| Tier | Page kind | Records | Preliminary machine-eligible | Published |',
    '|---:|---|---:|---:|---:|',
    `| 1 | Health | ${value.summary.byPageKind.health.total} | ${value.summary.byPageKind.health.preliminaryMachineEligible} | ${value.summary.byPageKind.health.lifecycle.publish} |`,
    `| 2 | Food | ${value.summary.byPageKind.food.total} | ${value.summary.byPageKind.food.preliminaryMachineEligible} | ${value.summary.byPageKind.food.lifecycle.publish} |`, '',
    'All imported records remain `quarantine` with `indexPolicy: none` and no canonical route. A separate explicit approval event is required before any record can transition to `publish`.', '',
  ];
  for (const kind of ['health', 'food']) {
    lines.push(`## ${kind === 'health' ? 'Health' : 'Food'} blocking signals`, '', '| Signal | Records |', '|---|---:|');
    for (const [reason, count] of Object.entries(value.summary.byPageKind[kind].reasonCounts)) lines.push(`| \`${reason}\` | ${count} |`);
    lines.push('');
  }
  const groupsBySignal = Object.groupBy(duplicateCandidates.groups, (group) => group.signal);
  lines.push('## Duplicate and collision review queue', '', '| Signal | Candidate groups |', '|---|---:|');
  for (const signal of ['EXACT_NORMALIZED_TITLE', 'ENTITY_HEAD', 'SAME_KIND_SLUG', 'EXACT_NORMALIZED_DESCRIPTION']) {
    lines.push(`| \`${signal}\` | ${(groupsBySignal[signal] || []).length} |`);
  }
  lines.push('', 'These are review leads, not automatic merge decisions. A clinician/editor must distinguish true duplicates from legitimate intent, preparation, variety, symptom, or population differences.', '');
  lines.push(
    '## Interpretation', '',
    '- Machine checks identify obvious blockers such as missing sources, contaminated templates, unsafe slugs, thin drafts, future dates, and high-risk language.',
    '- A page that eventually has zero machine blockers still requires identity, evidence-entailment, reviewer-scope, clinical/legal, accessibility, and editorial approval.',
    '- The registry is deliberately not imported by `src/`; route generation remains disconnected.',
    '- Changes to the legacy corpus must be followed by `npm run leaf:audit`, and CI checks exact registry/report synchronization.', '',
  );
  return lines.join('\n');
}

const registryJson = `${JSON.stringify(registry, null, 2)}\n`;
const duplicatesJson = `${JSON.stringify(duplicateCandidates, null, 2)}\n`;
const reportMarkdown = markdownReport(registry);

if (checkOnly) {
  const failures = [];
  if (!fs.existsSync(registryPath) || fs.readFileSync(registryPath, 'utf8') !== registryJson) failures.push('leaf registry is missing or stale');
  if (!fs.existsSync(duplicatesPath) || fs.readFileSync(duplicatesPath, 'utf8') !== duplicatesJson) failures.push('leaf duplicate-candidate report is missing or stale');
  if (!fs.existsSync(reportPath) || fs.readFileSync(reportPath, 'utf8') !== reportMarkdown) failures.push('leaf readiness report is missing or stale');
  if (failures.length) {
    failures.forEach((failure) => console.error(`- ${failure}`));
    console.error('Run `npm run leaf:audit` and review the resulting changes.');
    process.exit(1);
  }
  console.log(`Leaf registry synchronization passed: ${records.length} quarantined records match source.`);
} else {
  fs.mkdirSync(path.dirname(registryPath), { recursive: true });
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(registryPath, registryJson);
  fs.writeFileSync(duplicatesPath, duplicatesJson);
  fs.writeFileSync(reportPath, reportMarkdown);
  console.log(`Wrote ${records.length} quarantined records and readiness report.`);
}
