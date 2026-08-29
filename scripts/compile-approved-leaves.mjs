import fs from 'node:fs';
import path from 'node:path';
import { LIFECYCLE_STATES, REGISTRY_SCHEMA_VERSION, validatePublishingGraph } from './lib/leaf-publishing-policy.mjs';
import { collectContentClaimIds, validateApprovedContent } from './lib/approved-content-policy.mjs';
import { reviewFingerprintError } from './lib/content-fingerprint.mjs';

const root = process.cwd();
const inventoryPath = path.join(root, 'data/publishing/leaf-registry.json');
const decisionsPath = path.join(root, 'data/publishing/leaf-decisions.json');
const truthPath = path.join(root, 'data/publishing/truth-registry.json');
const approvedPath = path.join(root, 'data/publishing/approved-leaves.json');
const contentRoot = path.join(root, 'data/publishing/content');
const checkOnly = process.argv.includes('--check');
const decisionStates = new Set(LIFECYCLE_STATES);
const immutableInventoryFields = new Set([
  'sourcePath', 'sourceTopLevel', 'pageKind', 'tier', 'title', 'description', 'legacySlug',
  'diagnostics', 'preliminaryMachineEligible', 'preliminaryReasons',
]);

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    console.error(`Cannot read ${path.relative(root, file)}: ${error.message}`);
    process.exit(1);
  }
}

const inventory = readJson(inventoryPath);
const decisions = readJson(decisionsPath);
const truth = readJson(truthPath);
const failures = [];
if (decisions.schemaVersion !== REGISTRY_SCHEMA_VERSION) failures.push(`decision schemaVersion must be ${REGISTRY_SCHEMA_VERSION}`);
if (!Array.isArray(decisions.decisions)) failures.push('decisions must be an array');

const inventoryById = new Map((inventory.records || []).map((record) => [record.legacyId, record]));
const decisionById = new Map();
for (const [index, decision] of (decisions.decisions || []).entries()) {
  const label = `decisions[${index}]`;
  if (!inventoryById.has(decision.legacyId)) failures.push(`${label}: unknown legacyId ${decision.legacyId}`);
  if (decisionById.has(decision.legacyId)) failures.push(`${label}: duplicate decision for ${decision.legacyId}`);
  else decisionById.set(decision.legacyId, decision);
  if (!decisionStates.has(decision.lifecycleState)) failures.push(`${label}: invalid lifecycleState`);
  for (const field of immutableInventoryFields) if (Object.hasOwn(decision, field)) failures.push(`${label}: cannot override inventory field ${field}`);
  if (decision.lifecycleState === 'publish' && decision.approvalStatus !== 'approved') failures.push(`${label}: publish decision requires approvalStatus approved`);
  if (decision.lifecycleState === 'merge' && !decision.mergeTargetLegacyId) failures.push(`${label}: merge decision requires mergeTargetLegacyId`);
  if (decision.lifecycleState === 'merge' && decision.mergeTargetLegacyId === decision.legacyId) failures.push(`${label}: merge target cannot be the same record`);
  if (decision.lifecycleState === 'merge' && decision.mergeTargetLegacyId && !inventoryById.has(decision.mergeTargetLegacyId)) failures.push(`${label}: merge target does not exist`);
  if (decision.lifecycleState === 'redirect' && !decision.redirectTargetStableId) failures.push(`${label}: redirect decision requires redirectTargetStableId`);
  if (decision.lifecycleState === 'retire' && !decision.retirementReason) failures.push(`${label}: retire decision requires retirementReason`);
}

const mergeTargets = new Map(
  [...decisionById.values()]
    .filter((decision) => decision.lifecycleState === 'merge' && decision.mergeTargetLegacyId)
    .map((decision) => [decision.legacyId, decision.mergeTargetLegacyId]),
);
for (const start of mergeTargets.keys()) {
  const seen = new Set();
  let cursor = start;
  while (mergeTargets.has(cursor)) {
    if (seen.has(cursor)) {
      failures.push(`merge decisions contain a cycle involving ${[...seen, cursor].join(' -> ')}`);
      break;
    }
    seen.add(cursor);
    cursor = mergeTargets.get(cursor);
  }
}

const mergedRecords = (inventory.records || []).map((record) => {
  const decision = decisionById.get(record.legacyId);
  return decision ? { ...record, ...decision } : record;
});
const graphErrors = validatePublishingGraph({ schemaVersion: REGISTRY_SCHEMA_VERSION, records: mergedRecords }, truth);
failures.push(...graphErrors);
const publishedStableIds = new Set(mergedRecords.filter((record) => record.lifecycleState === 'publish').map((record) => record.stableId));
for (const [index, decision] of (decisions.decisions || []).entries()) {
  if (decision.lifecycleState === 'redirect' && !publishedStableIds.has(decision.redirectTargetStableId)) {
    failures.push(`decisions[${index}]: redirect target must resolve to an approved published stableId`);
  }
}

function publicFields(row, fields) {
  return row ? Object.fromEntries(fields.filter((field) => row[field] !== undefined).map((field) => [field, row[field]])) : null;
}

function approvedProjection(record) {
  const contentFile = path.resolve(root, record.contentSource);
  if (!contentFile.startsWith(`${contentRoot}${path.sep}`)) {
    failures.push(`${record.stableId}: contentSource escapes approved content directory`);
    return null;
  }
  let content;
  let contentText;
  try {
    contentText = fs.readFileSync(contentFile, 'utf8');
    content = JSON.parse(contentText);
  } catch (error) {
    failures.push(`${record.stableId}: cannot read approved content (${error.message})`);
    return null;
  }
  for (const error of validateApprovedContent(content, record)) failures.push(`${record.stableId}: ${error}`);

  const claimIds = collectContentClaimIds(content);
  const claimById = new Map((truth.claims || []).map((row) => [row.id, row]));
  const sourceById = new Map((truth.sources || []).map((row) => [row.id, row]));
  const authorById = new Map((truth.authors || []).map((row) => [row.id, row]));
  const reviewerById = new Map((truth.reviewers || []).map((row) => [row.id, row]));
  const taxonomyById = new Map((truth.taxonomies || []).map((row) => [row.id, row]));
  const reviewById = new Map((truth.reviewEvents || []).map((row) => [row.id, row]));
  const reviewEvent = reviewById.get(record.reviewEventId);
  const fingerprintError = reviewFingerprintError(reviewEvent, contentText);
  if (fingerprintError) failures.push(`${record.stableId}: ${fingerprintError}`);
  const claims = claimIds.map((id) => claimById.get(id)).filter(Boolean);
  const publicSourceIds = new Set(claims.flatMap((claim) => claim.sourceIds || []));

  return {
    stableId: record.stableId,
    pageKind: record.pageKind,
    tier: record.tier,
    entityType: record.entityType,
    canonicalName: record.canonicalName,
    canonicalPath: record.canonicalPath,
    seoTitle: record.seoTitle,
    metaDescription: record.metaDescription,
    aliases: Array.isArray(record.aliases) ? record.aliases : [],
    substantiveModified: record.substantiveModified,
    lastReviewed: record.lastReviewed || null,
    reviewExpires: record.reviewExpires || null,
    taxonomy: (record.taxonomyIds || []).map((id) => publicFields(taxonomyById.get(id), ['id', 'label', 'pageKind'])),
    author: publicFields(authorById.get(record.authorId), ['id', 'displayName', 'profilePath', 'sameAs']),
    reviewer: publicFields(reviewerById.get(record.reviewerId), ['id', 'displayName', 'profilePath', 'sameAs']),
    reviewEvent: publicFields(reviewEvent, ['id', 'reviewedAt', 'expiresAt', 'scopeSummary']),
    claims: claims.map((claim) => publicFields(claim, ['id', 'approvedText', 'sourceIds', 'evidenceGrade', 'uncertainty'])),
    sources: [...publicSourceIds].map((id) => publicFields(sourceById.get(id), ['id', 'title', 'publisher', 'url', 'publishedAt', 'accessedAt'])),
    content,
  };
}

const approvedRecords = mergedRecords.filter((record) => record.lifecycleState === 'publish').map(approvedProjection).filter(Boolean);
if (failures.length) {
  console.error(`Approved-leaf compiler failed (${failures.length}):`);
  failures.slice(0, 100).forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
const approved = {
  schemaVersion: REGISTRY_SCHEMA_VERSION,
  purpose: 'Generated approved-only projection. Application routes may eventually read this file, never the quarantined inventory or decision overlay.',
  records: approvedRecords,
};
const output = `${JSON.stringify(approved, null, 2)}\n`;

if (checkOnly) {
  if (!fs.existsSync(approvedPath) || fs.readFileSync(approvedPath, 'utf8') !== output) {
    console.error('Approved-leaves projection is missing or stale. Run `npm run leaf:compile`.');
    process.exit(1);
  }
  console.log(`Approved-leaf projection passed: ${approved.records.length} publishable records exactly match reviewed decisions.`);
} else {
  fs.writeFileSync(approvedPath, output);
  console.log(`Compiled ${approved.records.length} approved leaves from ${mergedRecords.length} inventoried records.`);
}
