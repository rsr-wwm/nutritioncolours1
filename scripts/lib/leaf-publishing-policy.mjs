import crypto from 'node:crypto';
import path from 'node:path';
import { isAllowedEntityType, unsafeAffirmativeCodes } from './approved-content-policy.mjs';
import { SHA256_PATTERN } from './content-fingerprint.mjs';

export const REGISTRY_SCHEMA_VERSION = 1;

export const HEALTH_COHORTS = Object.freeze([
  'health topics', 'health conditions', 'diseases', 'Adverse Food Reactions',
  'Autoimmune Disease', 'Blood Disease', 'Cardiovascular Disease', 'Endocrine Disorders',
  'Gastrointestinal Disease', 'Infectious Disease', 'Kidney Diseases', 'Liver Disease',
  'Malignant Neoplasms', 'Neurological Disorders', 'Respiratory Diseases',
  'life-stage', 'organ-wise',
]);

export const FOOD_COHORTS = Object.freeze([
  'Fruits', 'Vegetables', 'Culinary Herbs', 'Medicinal Herbs', 'herbs', 'spices',
  'Grains', 'Pulses & Legumes', 'Seeds', 'Oils-Healthy-Fats', 'Dairy & Alternatives',
  'Healthy Drinks & Beverages', 'Functional Foods', 'Fermented Foods', 'foods',
  'Adaptogens', 'Botanical',
]);

export const LIFECYCLE_STATES = Object.freeze([
  'publish', 'rewrite', 'merge', 'redirect', 'quarantine', 'retire',
]);

export const PUBLICATION_TIERS = Object.freeze({ health: 1, food: 2 });
export const TRUTH_REGISTRY_COLLECTIONS = Object.freeze([
  'authors', 'reviewers', 'sources', 'claims', 'taxonomies', 'reviewEvents', 'relations',
]);

const healthSet = new Set(HEALTH_COHORTS);
const foodSet = new Set(FOOD_COHORTS);
const lifecycleSet = new Set(LIFECYCLE_STATES);

const TRUTH_ID_PATTERNS = Object.freeze({
  authors: /^person:[a-z0-9]+(?:-[a-z0-9]+)*$/,
  reviewers: /^person:[a-z0-9]+(?:-[a-z0-9]+)*$/,
  sources: /^source:[a-z0-9]+(?:-[a-z0-9]+)*(?::[a-z0-9]+(?:-[a-z0-9]+)*)+$/,
  claims: /^claim:[a-z0-9]+(?:-[a-z0-9]+)*(?::[a-z0-9]+(?:-[a-z0-9]+)*)+$/,
  taxonomies: /^(?:health|food):[a-z0-9]+(?:-[a-z0-9]+)*$/,
  reviewEvents: /^review:[a-z0-9]+(?:-[a-z0-9]+)*(?::[a-z0-9]+(?:-[a-z0-9]+)*)+$/,
  relations: /^relation:[a-z0-9]+(?:-[a-z0-9]+)*(?::[a-z0-9]+(?:-[a-z0-9]+)*)+$/,
});

const TRUTH_ALLOWED_FIELDS = Object.freeze({
  authors: new Set(['id', 'displayName', 'role', 'correctionOwner', 'profilePath', 'sameAs', 'verified', 'verifiedAt', 'consentRecordedAt']),
  reviewers: new Set([
    'id', 'displayName', 'profilePath', 'sameAs', 'verified', 'verifiedAt', 'consentRecordedAt',
    'scopes', 'credentialSummary', 'credentialIssuer', 'credentialJurisdiction', 'credentialVerifiedAt',
    'credentialExpiresAt', 'conflicts', 'independenceAttestedAt',
  ]),
  sources: new Set([
    'id', 'title', 'publisher', 'url', 'publishedAt', 'updatedAt', 'version', 'accessedAt',
    'verified', 'retracted', 'retractionCheckedAt', 'jurisdiction', 'evidenceType', 'license', 'usageNotes',
  ]),
  claims: new Set([
    'id', 'approvedText', 'status', 'sourceIds', 'sourceLocators', 'claimClass', 'population',
    'exposure', 'comparator', 'outcome', 'magnitude', 'timeframe', 'uncertainty',
    'allowedDestinations', 'evidenceGrade', 'reviewNotes', 'reviewerId', 'reviewedAt',
  ]),
  taxonomies: new Set(['id', 'label', 'pageKind', 'description', 'aliases']),
  reviewEvents: new Set([
    'id', 'contentId', 'reviewerId', 'reviewedAt', 'expiresAt', 'status', 'contentSha256',
    'scopeSummary', 'conflictsReviewed', 'editorialApprovedAt', 'complianceApprovedAt', 'notes',
  ]),
  relations: new Set(['id', 'fromId', 'toId', 'relationType', 'status', 'reviewerId', 'reviewedAt']),
});

const CLAIM_CLASSES = new Set([
  'definition', 'composition', 'association', 'causal', 'clinical-guidance', 'safety',
  'preparation', 'storage', 'allergen', 'interaction', 'uncertainty',
]);
const RELATION_TYPES = new Set([
  'related', 'broader', 'narrower', 'variant-of', 'preparation-of', 'food-context-for', 'avoid-with',
]);

export function currentPolicyDate() {
  return new Date().toISOString().slice(0, 10);
}

const CONTAMINATION_PATTERNS = Object.freeze([
  ['GENERIC_CLINICAL_PATHWAY', /\b(?:critical\s+)?clinical pathway\b/i],
  ['GENERIC_METABOLIC_PATHWAY', /\bmetabolic pathways?\b/i],
  ['GENERIC_NATURAL_HEALING', /\bnatural healing\b/i],
  ['KIDNEY_TEMPLATE_LEAK', /\b(?:GFR indicators?|blood urea nitrogen|BUN|glomerular filtration rate)\b/i],
  ['BIOMARKER_TEMPLATE_LEAK', /\b(?:dynamic biomarker|biomarker baseline|placeholder biomarker)\b/i],
  ['PLACEHOLDER_CONTENT', /\b(?:lorem ipsum|replace this|content pending|citation pending|TBD|TODO)\b/i],
]);

const HIGH_RISK_PATTERNS = Object.freeze([
  ['CURE_LANGUAGE', /\bcur(?:e|es|ed|ing)\b/i],
  ['REVERSAL_LANGUAGE', /\brevers(?:e|es|ed|ing|al)\b/i],
  ['GUARANTEE_LANGUAGE', /\bguarantee(?:d|s)?\b/i],
  ['MEDICATION_STOP_LANGUAGE', /\b(?:stop|discontinue|come off|get off)\b[^.\n]{0,45}\bmedicat(?:ion|ions)\b/i],
  ['PRESCRIPTIVE_DOSING', /\b(?:take|consume|administer)\b[^.\n]{0,35}\b\d+(?:\.\d+)?\s*(?:mg|g|ml|mcg|µg|capsules?|tablets?|times? daily)\b/i],
  ['TREATMENT_CLAIM', /\b(?:treats?|treatment of|therapeutic intervention for)\b/i],
]);

export function normalizePath(value) {
  return value.split(path.sep).join('/');
}

export function cohortFor(relativePath) {
  const normalized = normalizePath(relativePath);
  const topLevel = normalized.split('/')[0];
  if (healthSet.has(topLevel)) return { kind: 'health', tier: PUBLICATION_TIERS.health, topLevel };
  if (foodSet.has(topLevel)) return { kind: 'food', tier: PUBLICATION_TIERS.food, topLevel };
  return null;
}

export function makeLegacyId(relativePath) {
  const digest = crypto.createHash('sha256').update(`knowledge:${normalizePath(relativePath)}`).digest('hex');
  return `legacy-${digest.slice(0, 16)}`;
}

export function countWords(markdown) {
  return (markdown.replace(/<[^>]+>/g, ' ').replace(/```[\s\S]*?```/g, ' ').match(/[\p{L}\p{N}]+/gu) || []).length;
}

export function externalUrls(markdown) {
  return [...markdown.matchAll(/https?:\/\/[^\s)\]>"']+/g)].map((match) => match[0]);
}

export function hasSourcesHeading(markdown) {
  return /^#{1,6}\s+(?:sources|references|citations)\b/im.test(markdown);
}

export function hasSpacedInternalLink(markdown) {
  return /\]\((?!https?:|mailto:|tel:|#)[^)]*\s+[^)]*\)/i.test(markdown);
}

export function isSafeSlug(slug) {
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return false;
  if (/(?:^|-)\d+$/.test(slug)) return false;
  return !/^(?:[a-z]{2,10}-)?(?:anat|org|msk|func|cul|grow|sport|leuk|min|berry)-?\d+$/i.test(slug);
}

function normalizeDate(value) {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toISOString().slice(0, 10);
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  return null;
}

export function inspectLeaf({ relativePath, frontmatter, body, today = currentPolicyDate() }) {
  const cohort = cohortFor(relativePath);
  if (!cohort) return null;

  const filenameSlug = path.basename(relativePath, path.extname(relativePath));
  const slug = typeof frontmatter.slug === 'string' ? frontmatter.slug.trim() : filenameSlug;
  const wordCount = countWords(body);
  const urls = externalUrls(body);
  const sourcesHeading = hasSourcesHeading(body);
  const reviewer = frontmatter.reviewedBy || frontmatter.reviewer || frontmatter.medicalReviewer || null;
  const author = frontmatter.author || frontmatter.authorId || null;
  const description = typeof frontmatter.description === 'string' ? frontmatter.description.trim() : '';
  const contamination = CONTAMINATION_PATTERNS.filter(([, pattern]) => pattern.test(body)).map(([code]) => code);
  const highRiskLanguage = HIGH_RISK_PATTERNS.filter(([, pattern]) => pattern.test(body)).map(([code]) => code);
  const minimumWords = cohort.kind === 'health' ? 800 : 600;
  const dates = ['lastReviewed', 'lastUpdated', 'dateModified', 'datePublished']
    .map((key) => [key, normalizeDate(frontmatter[key])])
    .filter(([, value]) => value);

  const reasons = [];
  if (!description) reasons.push('MISSING_DESCRIPTION');
  if (!author) reasons.push('MISSING_AUTHOR');
  if (cohort.kind === 'health' && !reviewer) reasons.push('MISSING_REVIEWER');
  if (cohort.kind === 'food' && highRiskLanguage.length && !reviewer) reasons.push('MISSING_REVIEWER_FOR_CLINICAL_CLAIMS');
  if (!sourcesHeading) reasons.push('MISSING_SOURCES_SECTION');
  if (urls.length < 2) reasons.push('INSUFFICIENT_EXTERNAL_SOURCES');
  if (wordCount < minimumWords) reasons.push('BELOW_PRELIMINARY_DEPTH_FLOOR');
  if (!isSafeSlug(slug)) reasons.push('UNSAFE_OR_RAW_SLUG');
  if (hasSpacedInternalLink(body)) reasons.push('SPACED_INTERNAL_LINK');
  if (contamination.length) reasons.push('BOILERPLATE_OR_CROSS_ENTITY_CONTAMINATION');
  if (highRiskLanguage.length) reasons.push('HIGH_RISK_MEDICAL_LANGUAGE_REQUIRES_CLAIM_REVIEW');
  if (dates.some(([, value]) => value > today)) reasons.push('FUTURE_DATE');

  return {
    legacyId: makeLegacyId(relativePath),
    sourcePath: `src/content/knowledge/${normalizePath(relativePath)}`,
    sourceTopLevel: cohort.topLevel,
    pageKind: cohort.kind,
    tier: cohort.tier,
    title: typeof frontmatter.title === 'string' ? frontmatter.title.trim() : '',
    description,
    legacySlug: slug,
    lifecycleState: 'quarantine',
    indexPolicy: 'none',
    canonicalPath: null,
    preliminaryMachineEligible: reasons.length === 0,
    preliminaryReasons: [...new Set(reasons)].sort(),
    diagnostics: {
      wordCount,
      externalSourceCount: urls.length,
      hasSourcesHeading: sourcesHeading,
      hasAuthorMetadata: Boolean(author),
      hasReviewerMetadata: Boolean(reviewer),
      hasSafeSlug: isSafeSlug(slug),
      hasSpacedInternalLink: hasSpacedInternalLink(body),
      contaminationSignals: contamination,
      highRiskLanguageSignals: highRiskLanguage,
    },
  };
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isIsoDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function isSafeSitePath(value) {
  return typeof value === 'string'
    && /^\/[a-z0-9]+(?:[/-][a-z0-9]+)*\/?$/.test(value)
    && !value.includes('//');
}

function isApprovedLeafPath(value) {
  return typeof value === 'string' && /^\/(?:health|foods)\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function hasOnlyNonEmptyStrings(value) {
  return Array.isArray(value) && value.every(isNonEmptyString);
}

function isCanonicalPathForTier(record) {
  if (!isNonEmptyString(record.canonicalPath)) return false;
  const namespace = record.tier === 1 ? 'health' : record.tier === 2 ? 'foods' : null;
  return Boolean(namespace && new RegExp(`^/${namespace}/[a-z0-9]+(?:-[a-z0-9]+)*$`).test(record.canonicalPath));
}

export function validateRegistry(registry, { today = currentPolicyDate() } = {}) {
  const errors = [];
  if (!registry || typeof registry !== 'object') return ['registry must be an object'];
  if (registry.schemaVersion !== REGISTRY_SCHEMA_VERSION) errors.push(`schemaVersion must be ${REGISTRY_SCHEMA_VERSION}`);
  if (!Array.isArray(registry.records)) return [...errors, 'records must be an array'];

  const ids = new Map();
  const stableIds = new Map();
  const paths = new Map();
  const sources = new Map();

  registry.records.forEach((record, index) => {
    const label = `records[${index}]`;
    if (!isNonEmptyString(record.legacyId)) errors.push(`${label}: missing legacyId`);
    else if (ids.has(record.legacyId)) errors.push(`${label}: duplicate legacyId also used by ${ids.get(record.legacyId)}`);
    else ids.set(record.legacyId, label);
    if (!isNonEmptyString(record.sourcePath)) errors.push(`${label}: missing sourcePath`);
    else if (sources.has(record.sourcePath)) errors.push(`${label}: duplicate sourcePath also used by ${sources.get(record.sourcePath)}`);
    else sources.set(record.sourcePath, label);
    if (!['health', 'food'].includes(record.pageKind)) errors.push(`${label}: invalid pageKind`);
    if (PUBLICATION_TIERS[record.pageKind] !== record.tier) errors.push(`${label}: pageKind/tier mismatch`);
    if (!lifecycleSet.has(record.lifecycleState)) errors.push(`${label}: invalid lifecycleState`);
    if (!['none', 'noindex', 'index'].includes(record.indexPolicy)) errors.push(`${label}: invalid indexPolicy`);

    if (record.lifecycleState !== 'publish') {
      if (record.indexPolicy === 'index') errors.push(`${label}: non-publish record cannot be indexable`);
      if (record.canonicalPath !== null) errors.push(`${label}: non-publish record must not reserve a canonicalPath`);
      return;
    }

    if (record.indexPolicy !== 'index') errors.push(`${label}: publish record must be indexable`);
    if (!isNonEmptyString(record.stableId) || !/^(?:health|food)-[a-z0-9][a-z0-9-]{5,}$/.test(record.stableId)) errors.push(`${label}: invalid stableId`);
    else if (stableIds.has(record.stableId)) errors.push(`${label}: duplicate stableId also used by ${stableIds.get(record.stableId)}`);
    else stableIds.set(record.stableId, label);
    if (!isNonEmptyString(record.canonicalName)) errors.push(`${label}: missing canonicalName`);
    if (!isAllowedEntityType(record.pageKind, record.entityType)) errors.push(`${label}: invalid entityType for pageKind`);
    if (!isNonEmptyString(record.seoTitle) || record.seoTitle.length < 20 || record.seoTitle.length > 80) errors.push(`${label}: seoTitle must be 20-80 characters`);
    if (!isNonEmptyString(record.metaDescription) || record.metaDescription.length < 70 || record.metaDescription.length > 180) errors.push(`${label}: metaDescription must be 70-180 characters`);
    for (const field of ['seoTitle', 'metaDescription']) {
      for (const code of unsafeAffirmativeCodes(record[field])) errors.push(`${label}: ${field} contains ${code}; metadata cannot make an unsafe health promise publishable`);
    }
    if (!isCanonicalPathForTier(record)) errors.push(`${label}: canonicalPath does not match tier namespace`);
    else if (paths.has(record.canonicalPath)) errors.push(`${label}: duplicate canonicalPath also used by ${paths.get(record.canonicalPath)}`);
    else paths.set(record.canonicalPath, label);
    if (!Array.isArray(record.taxonomyIds) || !record.taxonomyIds.length) errors.push(`${label}: missing taxonomyIds`);
    if (!isNonEmptyString(record.primaryIntent)) errors.push(`${label}: missing primaryIntent`);
    if (!isNonEmptyString(record.contentSource) || !/^data\/publishing\/content\/(?:health|food)\/[a-z0-9-]+\.json$/.test(record.contentSource)) errors.push(`${label}: invalid approved contentSource`);
    if (!isNonEmptyString(record.authorId)) errors.push(`${label}: missing authorId`);
    if (!Array.isArray(record.sourceIds) || record.sourceIds.length < 2) errors.push(`${label}: at least two sourceIds required`);
    if (!Array.isArray(record.claimIds) || !record.claimIds.length) errors.push(`${label}: at least one claimId required`);

    if (!isNonEmptyString(record.reviewEventId)) errors.push(`${label}: reviewEventId required`);
    if (!isNonEmptyString(record.reviewerId)) errors.push(`${label}: reviewerId required`);
    if (!isNonEmptyString(record.substantiveModified) || !/^\d{4}-\d{2}-\d{2}$/.test(record.substantiveModified)) {
      errors.push(`${label}: invalid substantiveModified`);
    } else if (record.substantiveModified > today) errors.push(`${label}: substantiveModified is in the future`);
    if (!isNonEmptyString(record.lastReviewed) || !/^\d{4}-\d{2}-\d{2}$/.test(record.lastReviewed) || record.lastReviewed > today) {
      errors.push(`${label}: valid lastReviewed required`);
    }
    if (!isNonEmptyString(record.reviewExpires) || !/^\d{4}-\d{2}-\d{2}$/.test(record.reviewExpires) || record.reviewExpires < today) {
      errors.push(`${label}: non-expired reviewExpires required`);
    }
    if (record.lastReviewed && record.substantiveModified && record.lastReviewed < record.substantiveModified) {
      errors.push(`${label}: content changed after last clinical review`);
    }
  });
  return errors;
}

function indexTruthCollection(truthRegistry, collection, errors, today) {
  const rows = truthRegistry[collection];
  if (!Array.isArray(rows)) {
    errors.push(`truth registry ${collection} must be an array`);
    return new Map();
  }
  const index = new Map();
  rows.forEach((row, position) => {
    const rowLabel = `truth registry ${collection}[${position}]`;
    if (!isPlainObject(row)) {
      errors.push(`${rowLabel} must be an object`);
      return;
    }
    for (const field of Object.keys(row)) {
      if (!TRUTH_ALLOWED_FIELDS[collection].has(field)) errors.push(`${rowLabel} contains unknown field ${field}; change the schema explicitly instead of silently extending trusted data`);
    }
    if (!isNonEmptyString(row.id)) errors.push(`truth registry ${collection}[${position}] missing id`);
    else if (!TRUTH_ID_PATTERNS[collection].test(row.id)) errors.push(`${rowLabel} id has the wrong namespace or format`);
    else if (index.has(row.id)) errors.push(`truth registry ${collection} duplicate id ${row.id}`);
    else index.set(row.id, row);
    if (row.profilePath !== undefined && !isSafeSitePath(row.profilePath)) errors.push(`${rowLabel} profilePath must be a clean site-relative path without a query or fragment`);
    if (row.verified === true && collection === 'authors') {
      if (!isNonEmptyString(row.displayName) || !isNonEmptyString(row.role) || !isNonEmptyString(row.correctionOwner)) errors.push(`${rowLabel} verified author missing displayName, role, or correctionOwner`);
      if (!isIsoDate(row.verifiedAt) || row.verifiedAt > today) errors.push(`${rowLabel} verified author needs a valid non-future verifiedAt`);
      if (!isIsoDate(row.consentRecordedAt) || row.consentRecordedAt > today) errors.push(`${rowLabel} verified author needs a valid non-future consentRecordedAt`);
    }
    if (row.verified === true && collection === 'reviewers') {
      if (!isNonEmptyString(row.displayName) || !hasOnlyNonEmptyStrings(row.scopes) || row.scopes.length === 0) errors.push(`${rowLabel} verified reviewer missing displayName or scopes`);
      for (const field of ['credentialSummary', 'credentialIssuer', 'credentialJurisdiction']) {
        if (!isNonEmptyString(row[field])) errors.push(`${rowLabel} verified reviewer missing ${field}`);
      }
      for (const field of ['verifiedAt', 'consentRecordedAt', 'credentialVerifiedAt']) {
        if (!isIsoDate(row[field]) || row[field] > today) errors.push(`${rowLabel} verified reviewer needs a valid non-future ${field}`);
      }
      if (!isIsoDate(row.independenceAttestedAt) || row.independenceAttestedAt > today) errors.push(`${rowLabel} verified reviewer needs a valid non-future independenceAttestedAt`);
      if (row.credentialExpiresAt !== undefined && (!isIsoDate(row.credentialExpiresAt) || row.credentialExpiresAt < today)) errors.push(`${rowLabel} credentialExpiresAt is invalid or expired`);
      if (!Array.isArray(row.conflicts) || !row.conflicts.every(isNonEmptyString)) errors.push(`${rowLabel} conflicts must be an array of disclosed conflict statements (an empty array means none declared)`);
    }
    if (['authors', 'reviewers'].includes(collection) && row.sameAs !== undefined) {
      if (!Array.isArray(row.sameAs)) errors.push(`truth registry ${collection}[${position}] sameAs must be an array`);
      else for (const [sameAsIndex, value] of row.sameAs.entries()) {
        try {
          const url = new URL(value);
          if (url.protocol !== 'https:' || url.username || url.password) throw new Error('unsafe identity URL');
        } catch {
          errors.push(`truth registry ${collection}[${position}] sameAs[${sameAsIndex}] must be a credentials-free HTTPS URL`);
        }
      }
    }
    if (row.verified === true && collection === 'sources') {
      if (!isNonEmptyString(row.title) || !isNonEmptyString(row.publisher) || !isIsoDate(row.accessedAt)) errors.push(`${rowLabel} verified source missing title, publisher, or valid accessedAt`);
      if (row.accessedAt > today) errors.push(`${rowLabel} accessedAt is in the future`);
      if (row.publishedAt !== undefined && !isIsoDate(row.publishedAt)) errors.push(`${rowLabel} publishedAt must be a real ISO date when supplied`);
      if (row.updatedAt !== undefined && (!isIsoDate(row.updatedAt) || row.updatedAt > today)) errors.push(`${rowLabel} updatedAt must be a real non-future ISO date when supplied`);
      if ((!isIsoDate(row.publishedAt) && !isNonEmptyString(row.version)) || !isIsoDate(row.retractionCheckedAt) || row.retractionCheckedAt > today) errors.push(`${rowLabel} verified source needs publishedAt or version plus a non-future retractionCheckedAt`);
      if (!isNonEmptyString(row.evidenceType) || !isNonEmptyString(row.jurisdiction) || !isNonEmptyString(row.usageNotes)) errors.push(`${rowLabel} verified source missing evidenceType, jurisdiction, or usageNotes`);
      if (typeof row.retracted !== 'boolean') errors.push(`${rowLabel} verified source retracted must be explicitly true or false`);
      try {
        const url = new URL(row.url);
          if (url.protocol !== 'https:' || url.username || url.password) throw new Error('unsupported or credential-bearing URL');
      } catch {
        errors.push(`truth registry ${collection}[${position}] verified source has invalid or credential-bearing URL`);
      }
    }
    if (collection === 'claims' && row.status === 'approved') {
      if (!isNonEmptyString(row.approvedText) || !hasOnlyNonEmptyStrings(row.sourceIds) || row.sourceIds.length === 0) errors.push(`${rowLabel} approved claim missing text or sources`);
      for (const code of unsafeAffirmativeCodes(row.approvedText || '')) errors.push(`${rowLabel} approvedText contains ${code}; a truth-registry status cannot legitimize an unsafe health promise`);
      if (!CLAIM_CLASSES.has(row.claimClass)) errors.push(`${rowLabel} approved claim has an invalid claimClass`);
      for (const field of ['population', 'exposure', 'comparator', 'outcome', 'magnitude', 'timeframe', 'uncertainty']) {
        if (!isNonEmptyString(row[field])) errors.push(`${rowLabel} approved claim missing ${field}; use a human-justified "not-applicable" when it genuinely does not apply`);
      }
      if (!hasOnlyNonEmptyStrings(row.allowedDestinations) || row.allowedDestinations.length === 0 || row.allowedDestinations.some((value) => !isApprovedLeafPath(value))) errors.push(`${rowLabel} approved claim needs canonical health/food allowedDestinations`);
      if (!isNonEmptyString(row.reviewerId) || !TRUTH_ID_PATTERNS.reviewers.test(row.reviewerId) || !isIsoDate(row.reviewedAt) || row.reviewedAt > today) errors.push(`${rowLabel} approved claim needs a reviewer and non-future reviewedAt`);
      if (!isPlainObject(row.sourceLocators)) errors.push(`${rowLabel} approved claim sourceLocators must map every source ID to an exact supporting location`);
      else {
        const sourceIdSet = new Set(row.sourceIds || []);
        for (const sourceId of sourceIdSet) if (!isNonEmptyString(row.sourceLocators[sourceId])) errors.push(`${rowLabel} approved claim missing source locator for ${sourceId}`);
        for (const sourceId of Object.keys(row.sourceLocators)) if (!sourceIdSet.has(sourceId)) errors.push(`${rowLabel} sourceLocators contains undeclared source ${sourceId}`);
      }
    }
    if (collection === 'taxonomies') {
      if (!isNonEmptyString(row.label) || !['health', 'food'].includes(row.pageKind)) errors.push(`${rowLabel} invalid taxonomy`);
      if (isNonEmptyString(row.id) && !row.id.startsWith(`${row.pageKind}:`)) errors.push(`${rowLabel} taxonomy ID namespace does not match pageKind`);
    }
    if (collection === 'reviewEvents' && row.status === 'approved') {
      if (!SHA256_PATTERN.test(row.contentSha256 || '')) errors.push(`${rowLabel} approved review event missing valid contentSha256`);
      if (!isNonEmptyString(row.contentId) || !/^health-|^food-/.test(row.contentId)) errors.push(`${rowLabel} approved review event has invalid contentId`);
      if (!isNonEmptyString(row.reviewerId) || !TRUTH_ID_PATTERNS.reviewers.test(row.reviewerId)) errors.push(`${rowLabel} approved review event has invalid reviewerId`);
      if (!isIsoDate(row.reviewedAt) || row.reviewedAt > today || !isIsoDate(row.expiresAt) || row.expiresAt < today) errors.push(`${rowLabel} approved review event has invalid, future, or expired dates`);
      if (!isNonEmptyString(row.scopeSummary)) errors.push(`${rowLabel} approved review event missing scopeSummary`);
      if (row.conflictsReviewed !== true) errors.push(`${rowLabel} approved review event must explicitly attest conflictsReviewed: true`);
      for (const field of ['editorialApprovedAt', 'complianceApprovedAt']) {
        if (!isIsoDate(row[field]) || row[field] > today) errors.push(`${rowLabel} approved review event needs a valid non-future ${field}`);
      }
    }
    if (collection === 'relations' && row.status === 'approved') {
      if (!isNonEmptyString(row.fromId) || !isNonEmptyString(row.toId) || row.fromId === row.toId) errors.push(`${rowLabel} approved relation needs different fromId and toId values`);
      if (!RELATION_TYPES.has(row.relationType)) errors.push(`${rowLabel} approved relation has an invalid relationType`);
      if (!isNonEmptyString(row.reviewerId) || !TRUTH_ID_PATTERNS.reviewers.test(row.reviewerId) || !isIsoDate(row.reviewedAt) || row.reviewedAt > today) errors.push(`${rowLabel} approved relation needs a reviewer and non-future reviewedAt`);
    }
  });
  return index;
}

export function validatePublishingGraph(registry, truthRegistry, { today = currentPolicyDate() } = {}) {
  const errors = validateRegistry(registry, { today });
  if (!truthRegistry || typeof truthRegistry !== 'object') return [...errors, 'truth registry must be an object'];
  if (truthRegistry.schemaVersion !== REGISTRY_SCHEMA_VERSION) errors.push(`truth registry schemaVersion must be ${REGISTRY_SCHEMA_VERSION}`);
  const allowedTopLevelFields = new Set(['schemaVersion', 'purpose', ...TRUTH_REGISTRY_COLLECTIONS]);
  for (const field of Object.keys(truthRegistry)) if (!allowedTopLevelFields.has(field)) errors.push(`truth registry contains unknown top-level field ${field}`);

  const indexes = Object.fromEntries(TRUTH_REGISTRY_COLLECTIONS.map((collection) => [collection, indexTruthCollection(truthRegistry, collection, errors, today)]));
  for (const claim of indexes.claims.values()) {
    if (claim.status !== 'approved') continue;
    for (const sourceId of claim.sourceIds || []) {
      const source = indexes.sources.get(sourceId);
      if (!source?.verified || source.retracted === true) errors.push(`${claim.id}: approved claim source ${sourceId} is missing, unverified, or retracted`);
    }
    if (!indexes.reviewers.get(claim.reviewerId)?.verified) errors.push(`${claim.id}: claim reviewer is missing or unverified`);
  }
  for (const reviewer of indexes.reviewers.values()) {
    if (!reviewer.verified) continue;
    for (const scope of reviewer.scopes || []) if (!indexes.taxonomies.has(scope)) errors.push(`${reviewer.id}: reviewer scope ${scope} does not resolve to a taxonomy`);
  }
  for (const reviewEvent of indexes.reviewEvents.values()) {
    if (reviewEvent.status === 'approved' && !indexes.reviewers.get(reviewEvent.reviewerId)?.verified) errors.push(`${reviewEvent.id}: review-event reviewer is missing or unverified`);
  }
  const relationTargets = new Set([
    ...indexes.claims.keys(), ...indexes.taxonomies.keys(),
    ...((registry.records || []).filter((record) => record.lifecycleState === 'publish').map((record) => record.stableId)),
  ]);
  for (const relation of indexes.relations.values()) {
    if (relation.status !== 'approved') continue;
    if (!relationTargets.has(relation.fromId)) errors.push(`${relation.id}: unknown relation fromId ${relation.fromId}`);
    if (!relationTargets.has(relation.toId)) errors.push(`${relation.id}: unknown relation toId ${relation.toId}`);
    if (!indexes.reviewers.get(relation.reviewerId)?.verified) errors.push(`${relation.id}: relation reviewer is missing or unverified`);
  }
  for (const record of registry.records || []) {
    if (record.lifecycleState !== 'publish') continue;
    const label = record.stableId || record.legacyId;
    const author = indexes.authors.get(record.authorId);
    if (!author?.verified) errors.push(`${label}: authorId does not resolve to a verified author`);
    if (record.authorId === record.reviewerId) errors.push(`${label}: author and reviewer must be different accountable people`);
    for (const taxonomyId of record.taxonomyIds || []) {
      const taxonomy = indexes.taxonomies.get(taxonomyId);
      if (!taxonomy) errors.push(`${label}: unknown taxonomyId ${taxonomyId}`);
      else if (taxonomy.pageKind !== record.pageKind) errors.push(`${label}: taxonomy ${taxonomyId} has wrong pageKind`);
    }
    for (const sourceId of record.sourceIds || []) {
      const source = indexes.sources.get(sourceId);
      if (!source?.verified || source.retracted === true) errors.push(`${label}: sourceId ${sourceId} is missing, unverified, or retracted`);
    }
    for (const claimId of record.claimIds || []) {
      const claim = indexes.claims.get(claimId);
      if (!claim || claim.status !== 'approved') errors.push(`${label}: claimId ${claimId} is not approved`);
      else if ((claim.sourceIds || []).some((sourceId) => !record.sourceIds.includes(sourceId))) errors.push(`${label}: claim ${claimId} depends on an undeclared page source`);
      else if (!claim.allowedDestinations.includes(record.canonicalPath)) errors.push(`${label}: claim ${claimId} is not approved for destination ${record.canonicalPath}`);
    }

    const reviewer = indexes.reviewers.get(record.reviewerId);
    if (!reviewer?.verified || !Array.isArray(reviewer.scopes) || !record.taxonomyIds.some((id) => reviewer.scopes.includes(id))) {
      errors.push(`${label}: reviewer is missing, unverified, or outside taxonomy scope`);
    }
    const reviewEvent = indexes.reviewEvents.get(record.reviewEventId);
    if (!reviewEvent || reviewEvent.status !== 'approved') errors.push(`${label}: review event is missing or not approved`);
    else {
      if (reviewEvent.contentId !== record.stableId) errors.push(`${label}: review event contentId mismatch`);
      if (reviewEvent.reviewerId !== record.reviewerId) errors.push(`${label}: review event reviewerId mismatch`);
      if (reviewEvent.reviewedAt !== record.lastReviewed) errors.push(`${label}: review event date mismatch`);
      if (reviewEvent.expiresAt !== record.reviewExpires) errors.push(`${label}: review event expiry mismatches`);
      if (reviewEvent.expiresAt < today) errors.push(`${label}: review event is expired`);
    }
  }
  return errors;
}

export function registrySummary(records) {
  const byPageKind = Object.fromEntries(['health', 'food'].map((kind) => {
    const cohort = records.filter((record) => record.pageKind === kind);
    const reasonCounts = {};
    for (const record of cohort) {
      for (const reason of record.preliminaryReasons) reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
    }
    return [kind, {
      total: cohort.length,
      preliminaryMachineEligible: cohort.filter((record) => record.preliminaryMachineEligible).length,
      lifecycle: Object.fromEntries(LIFECYCLE_STATES.map((state) => [state, cohort.filter((record) => record.lifecycleState === state).length])),
      reasonCounts: Object.fromEntries(Object.entries(reasonCounts).sort(([a], [b]) => a.localeCompare(b))),
    }];
  }));
  return { total: records.length, byPageKind };
}
