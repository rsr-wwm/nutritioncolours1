import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { sha256Text } from './lib/content-fingerprint.mjs';

const root = process.cwd();
const sourceRoot = path.join(root, 'src/content/locations');
const outputPath = path.join(root, 'data/publishing/location-quarantine.json');
const checkOnly = process.argv.includes('--check');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function parseSource(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { frontmatter: {}, body: raw, parseError: 'missing YAML frontmatter boundary' };
  try {
    return { frontmatter: YAML.parse(match[1]) || {}, body: raw.slice(match[0].length), parseError: null };
  } catch (error) {
    return { frontmatter: {}, body: raw.slice(match[0].length), parseError: error.message };
  }
}

function externalEvidenceUrls(raw) {
  return [...new Set([...raw.matchAll(/https?:\/\/[^\s)\]}>"']+/g)].map((match) => match[0].replace(/[.,;:]+$/, '')))]
    .filter((value) => {
      try {
        const hostname = new URL(value).hostname.toLowerCase();
        return hostname !== 'nutritioncolours.com'
          && !hostname.endsWith('.nutritioncolours.com')
          && hostname !== 'schema.org'
          && !hostname.endsWith('.schema.org');
      } catch {
        return false;
      }
    });
}

function has(pattern, value) {
  return pattern.test(String(value || ''));
}

const records = walk(sourceRoot)
  .filter((file) => /\.mdx?$/.test(file))
  .sort((a, b) => a.localeCompare(b))
  .map((file) => {
    const raw = fs.readFileSync(file, 'utf8');
    const { frontmatter, body, parseError } = parseSource(raw);
    const structuredData = frontmatter.structuredData || '';
    const evidenceUrls = externalEvidenceUrls(raw);
    return {
      sourcePath: path.relative(root, file).split(path.sep).join('/'),
      slug: typeof frontmatter.slug === 'string' ? frontmatter.slug : path.basename(file, path.extname(file)),
      title: typeof frontmatter.title === 'string' ? frontmatter.title : null,
      city: frontmatter.geo?.city || null,
      state: frontmatter.geo?.state || null,
      canonical: typeof frontmatter.canonical === 'string' ? frontmatter.canonical : null,
      contentSha256: sha256Text(raw),
      parseError,
      diagnostics: {
        requestsIndexing: has(/\bindex\s*,\s*follow\b/i, frontmatter.robots),
        hasMedicalWebPageSchema: has(/"@type"\s*:\s*"MedicalWebPage"/i, structuredData),
        hasFaqSchema: has(/"@type"\s*:\s*"FAQPage"/i, structuredData),
        hasAuthorMetadata: Boolean(frontmatter.author || frontmatter.authorId || frontmatter.byline),
        hasReviewerMetadata: Boolean(frontmatter.reviewedBy || frontmatter.reviewer || frontmatter.medicalReviewer),
        hasSourcesHeading: has(/^#{1,6}\s+(?:sources|references|citations)\b/im, body),
        externalEvidenceSourceCount: evidenceUrls.length,
        contentWordCount: (body.match(/[\p{L}\p{N}]+/gu) || []).length,
        localityMedicalPersonalization: has(/\b(?:tailored to|higher risk|at greater risk|prevalen(?:t|ce)|common deficienc|local staples|therapeutic spices|climate-specific|regional health)\b/i, raw),
        prescriptiveTimingOrDose: has(/\b(?:(?:take|consume|administer|eat)\b[^.\n]{0,80}\b(?:\d+(?:\.\d+)?\s*(?:mg|g|ml|mcg|µg)|morning|before (?:sunrise|bed)|after sunset)|largest meal between|avoid (?:heavy )?meals? after)\b/i, body),
        highRiskOutcomeLanguage: has(/\b(?:cure|curing|reverse|reversal|guarantee|worsen|optimi[sz]e\b[^.\n]{0,35}\b(?:sensitivity|glucose|health)|support\b[^.\n]{0,45}\bmanagement|managing\b[^.\n]{0,45}\beffectively|targeted supplementation)\b/i, body),
        physicalOfficeRepresentation: has(/"@type"\s*:\s*"(?:LocalBusiness|MedicalBusiness|PostalAddress)"|\b(?:our|this)\s+(?:clinic|office)|\bwalk[- ]?in\b|\bstreetAddress\b/i, raw),
        onlineOnlyDisclosure: has(/\b(?:online[- ]only|remote[- ]only|no physical (?:office|location)|virtual service)\b/i, raw),
      },
    };
  });

const count = (predicate) => records.filter(predicate).length;
const summary = {
  total: records.length,
  parseErrors: count((row) => row.parseError),
  requestsIndexing: count((row) => row.diagnostics.requestsIndexing),
  medicalWebPageSchema: count((row) => row.diagnostics.hasMedicalWebPageSchema),
  faqSchema: count((row) => row.diagnostics.hasFaqSchema),
  missingAuthorMetadata: count((row) => !row.diagnostics.hasAuthorMetadata),
  missingReviewerMetadata: count((row) => !row.diagnostics.hasReviewerMetadata),
  missingSourcesHeading: count((row) => !row.diagnostics.hasSourcesHeading),
  noExternalEvidenceSources: count((row) => row.diagnostics.externalEvidenceSourceCount === 0),
  localityMedicalPersonalization: count((row) => row.diagnostics.localityMedicalPersonalization),
  prescriptiveTimingOrDose: count((row) => row.diagnostics.prescriptiveTimingOrDose),
  highRiskOutcomeLanguage: count((row) => row.diagnostics.highRiskOutcomeLanguage),
  physicalOfficeRepresentation: count((row) => row.diagnostics.physicalOfficeRepresentation),
  onlineOnlyDisclosure: count((row) => row.diagnostics.onlineOnlyDisclosure),
};

const registry = {
  schemaVersion: 1,
  purpose: 'Deterministic, non-public quarantine inventory. This file documents locality drafts and must never be used to generate routes, sitemaps, service areas, or business-location claims.',
  publicationPolicy: 'All records remain quarantined. Online-only services must not be represented as physical offices, clinics, branches, or virtual-office locations.',
  summary,
  records,
};
const output = `${JSON.stringify(registry, null, 2)}\n`;

if (checkOnly) {
  if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, 'utf8') !== output) {
    console.error('Location quarantine inventory is missing or stale. Run `npm run location:audit`.');
    process.exit(1);
  }
  console.log(`Location quarantine inventory passed: ${records.length} drafts remain exactly synchronized and disconnected.`);
} else {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output);
  console.log(`Inventoried ${records.length} quarantined locality drafts. No routes were created.`);
}
