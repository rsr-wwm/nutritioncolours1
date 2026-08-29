import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import YAML from 'yaml';
import { HEALTH_COHORTS, FOOD_COHORTS } from './lib/leaf-publishing-policy.mjs';

const root = process.cwd();
const knowledgeRoot = path.join(root, 'src/content/knowledge');
const outputPath = path.join(root, 'data/publishing/reference-registry.json');
const checkOnly = process.argv.includes('--check');
const REFERENCE_TOP_LEVELS = new Set([
  'Dietary Patterns', 'Food Matrix', 'Macronutrients', 'Micronutrients',
  'Nutrient Database', 'bioactive-compounds', 'minerals', 'phytonutrients', 'vitamins',
]);
const KNOWN_TOP_LEVELS = new Set([...HEALTH_COHORTS, ...FOOD_COHORTS, ...REFERENCE_TOP_LEVELS]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function parseMarkdown(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { frontmatter: {}, body: raw, parseError: 'missing YAML frontmatter' };
  try {
    return { frontmatter: YAML.parse(match[1]) || {}, body: raw.slice(match[0].length), parseError: null };
  } catch (error) {
    return { frontmatter: {}, body: raw.slice(match[0].length), parseError: error.message };
  }
}

function sha256Text(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}
function normalize(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}
function urls(value) {
  return [...new Set([...String(value || '').matchAll(/https?:\/\/[^\s)\]}>"']+/g)].map((match) => match[0].replace(/[.,;:]+$/, '')))].filter((url) => {
    try {
      const hostname = new URL(url).hostname.toLowerCase();
      return hostname !== 'nutritioncolours.com'
        && !hostname.endsWith('.nutritioncolours.com')
        && hostname !== 'schema.org'
        && !hostname.endsWith('.schema.org');
    }
    catch { return false; }
  });
}
function safeSlug(slug) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && !/(?:^|-)[0-9]+$/.test(slug);
}
function countWords(value) {
  return (String(value || '').match(/[\p{L}\p{N}]+/gu) || []).length;
}

function containsMarkdown(dir) {
  return walk(dir).some((file) => file.endsWith('.md'));
}

const unmappedTopLevels = fs.existsSync(knowledgeRoot)
  ? fs.readdirSync(knowledgeRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && containsMarkdown(path.join(knowledgeRoot, entry.name)))
    .map((entry) => entry.name)
    .filter((name) => !KNOWN_TOP_LEVELS.has(name))
    .sort()
  : [];
if (unmappedTopLevels.length) {
  console.error(`Reference registry cannot proceed: unmapped knowledge top-level folders: ${unmappedTopLevels.join(', ')}`);
  process.exit(1);
}

const records = walk(knowledgeRoot)
  .filter((file) => /\.md$/.test(file))
  .map((file) => ({ file, relativePath: path.relative(knowledgeRoot, file).split(path.sep).join('/') }))
  .filter(({ relativePath }) => REFERENCE_TOP_LEVELS.has(relativePath.split('/')[0]))
  .sort((a, b) => a.relativePath.localeCompare(b.relativePath))
  .map(({ file, relativePath }) => {
    const raw = fs.readFileSync(file, 'utf8');
    const { frontmatter, body, parseError } = parseMarkdown(raw);
    const filenameSlug = path.basename(file, '.md');
    const slug = normalize(frontmatter.slug) || filenameSlug;
    const externalUrls = urls(raw);
    const contaminationSignals = [];
    if (/\b(?:clinical pathway|natural healing|dynamic biomarker|placeholder biomarker|lorem ipsum|replace this|content pending|citation pending)\b/i.test(body)) contaminationSignals.push('BOILERPLATE_OR_PLACEHOLDER');
    if (/\b(?:cure|reverse|guarantee|stop\s+medication|treats?)\b/i.test(body)) contaminationSignals.push('HIGH_RISK_OUTCOME_LANGUAGE');
    const reasons = [];
    if (parseError) reasons.push('FRONTMATTER_PARSE_ERROR');
    if (!normalize(frontmatter.title)) reasons.push('MISSING_TITLE');
    if (!normalize(frontmatter.description)) reasons.push('MISSING_DESCRIPTION');
    if (!frontmatter.author && !frontmatter.authorId) reasons.push('MISSING_AUTHOR');
    if (!frontmatter.reviewedBy && !frontmatter.reviewer && !frontmatter.medicalReviewer) reasons.push('MISSING_REVIEWER');
    if (!/^#{1,6}\s+(?:sources|references|citations)\b/im.test(body)) reasons.push('MISSING_SOURCES_SECTION');
    if (externalUrls.length < 2) reasons.push('INSUFFICIENT_EXTERNAL_SOURCES');
    if (!safeSlug(slug)) reasons.push('UNSAFE_OR_RAW_SLUG');
    if (contaminationSignals.length) reasons.push(...contaminationSignals);
    const digest = crypto.createHash('sha256').update(`knowledge:${relativePath}`).digest('hex');
    return {
      legacyId: `reference-${digest.slice(0, 16)}`,
      sourcePath: `src/content/knowledge/${relativePath}`,
      sourceTopLevel: relativePath.split('/')[0],
      pageKind: 'nutrition-reference',
      tier: 3,
      title: normalize(frontmatter.title),
      description: normalize(frontmatter.description),
      legacySlug: slug,
      lifecycleState: 'quarantine',
      indexPolicy: 'none',
      canonicalPath: null,
      contentSha256: sha256Text(raw),
      preliminaryMachineEligible: reasons.length === 0,
      preliminaryReasons: [...new Set(reasons)].sort(),
      diagnostics: {
        wordCount: countWords(body),
        externalSourceCount: externalUrls.length,
        hasSourcesHeading: /^#{1,6}\s+(?:sources|references|citations)\b/im.test(body),
        hasAuthorMetadata: Boolean(frontmatter.author || frontmatter.authorId),
        hasReviewerMetadata: Boolean(frontmatter.reviewedBy || frontmatter.reviewer || frontmatter.medicalReviewer),
        hasSafeSlug: safeSlug(slug),
        contaminationSignals,
      },
    };
  });

const reasonCounts = {};
for (const record of records) for (const reason of record.preliminaryReasons) reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
const registry = {
  schemaVersion: 1,
  purpose: 'Quarantined Tier-3 nutrition-reference inventory. These records are not health or food leaves and must not generate routes, canonicals, sitemaps, search entries, schema, or service claims.',
  publicationPolicy: 'Tier-3 records require a separate reference content contract, evidence model, author/reviewer scope, and route decision before any publication.',
  summary: {
    total: records.length,
    preliminaryMachineEligible: records.filter((record) => record.preliminaryMachineEligible).length,
    lifecycle: { publish: 0, rewrite: 0, merge: 0, redirect: 0, quarantine: records.length, retire: 0 },
    reasonCounts: Object.fromEntries(Object.entries(reasonCounts).sort(([a], [b]) => a.localeCompare(b))),
  },
  records,
};
const output = `${JSON.stringify(registry, null, 2)}\n`;

if (checkOnly) {
  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, 'utf8') !== output) {
    console.error('Reference registry is missing or stale. Run `npm run reference:audit`.');
    process.exit(1);
  }
  console.log(`Reference registry synchronization passed: ${records.length} Tier-3 records remain quarantined.`);
} else {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output);
  console.log(`Inventoried ${records.length} Tier-3 nutrition-reference records. No routes were created.`);
}
