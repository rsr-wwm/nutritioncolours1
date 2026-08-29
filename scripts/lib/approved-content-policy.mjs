const HEALTH_ENTITY_TYPES = new Set(['condition', 'disease', 'symptom', 'health-topic', 'body-system', 'life-stage']);
const FOOD_ENTITY_TYPES = new Set(['fruit', 'vegetable', 'herb', 'spice', 'grain', 'pulse', 'seed', 'oil', 'dairy-alternative', 'beverage', 'fermented-food', 'functional-food', 'other-food']);

const HEALTH_REQUIRED_SECTIONS = Object.freeze({
  condition: ['overview', 'symptoms', 'causes-risk-factors', 'assessment', 'care', 'nutrition', 'limitations'],
  disease: ['overview', 'symptoms', 'causes-risk-factors', 'assessment', 'care', 'nutrition', 'limitations'],
  symptom: ['overview', 'when-to-seek-help', 'causes', 'assessment', 'nutrition', 'limitations'],
  'health-topic': ['overview', 'evidence', 'practical-guidance', 'nutrition', 'limitations'],
  'body-system': ['overview', 'functions', 'common-concerns', 'nutrition', 'limitations'],
  'life-stage': ['overview', 'nutrient-needs', 'common-concerns', 'practical-guidance', 'limitations'],
});

const FOOD_REQUIRED_SECTIONS = Object.freeze([
  'identity', 'composition', 'preparation-storage', 'safety', 'health-evidence', 'variability',
]);

// A citation ID cannot make a prohibited promise safe. These patterns target
// affirmative outcome or medication-change instructions while allowing
// clearly bounded limitations such as “does not treat” or “not a substitute”.
const UNSAFE_AFFIRMATIVE_PATTERNS = Object.freeze([
  ['OUTCOME_PROMISE', /\b(?:can|could|will|may|proven\s+to|guarantee(?:s|d)?)\s+(?:cure|reverse|treat|prevent)\b/i],
  ['MEDICATION_CHANGE', /\b(?:stop|discontinue|reduce|replace)\s+(?:your\s+)?(?:medications?|insulin|prescriptions?)\b/i],
  ['DIAGNOSIS_OR_PRESCRIPTION', /\b(?:diagnose|prescribe)\s+(?:you|your|a|the)\b/i],
  ['UNIVERSAL_OUTCOME', /\b(?:works?|effective)\s+for\s+(?:everyone|all\s+people|all\s+cases)\b/i],
  ['DETOX_PROMISE', /\b(?:can|will|does|helps?|proven\s+to)\s+(?:detox|cleanse|flush(?:es)?\s+(?:toxins?|your\s+body))\b/i],
  ['ABSOLUTE_SAFETY', /\b(?:completely|100%|totally)\s+(?:safe|harmless|risk[- ]free)\b/i],
  ['CARE_AVOIDANCE', /\b(?:no|without\s+the)\s+need\s+to\s+(?:see|visit|consult)\s+(?:a\s+)?(?:doctor|clinician|healthcare\s+professional|emergency)\b/i],
]);

export function unsafeAffirmativeCodes(value) {
  return UNSAFE_AFFIRMATIVE_PATTERNS
    .filter(([, pattern]) => pattern.test(String(value || '')))
    .map(([code]) => code);
}

function words(value) {
  return (String(value || '').match(/[\p{L}\p{N}]+/gu) || []).length;
}

function plainText(value) {
  return typeof value === 'string' && value.trim().length > 0 && !/<\/?[a-z][^>]*>/i.test(value) && !/javascript:/i.test(value);
}

function safeId(value) {
  return typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function validateClaimIds(claimIds, record, label, errors) {
  if (!Array.isArray(claimIds) || claimIds.length === 0) {
    errors.push(`${label}: at least one claimId is required`);
    return;
  }
  const declared = new Set(record.claimIds || []);
  for (const claimId of claimIds) if (!declared.has(claimId)) errors.push(`${label}: undeclared claimId ${claimId}`);
  if (new Set(claimIds).size !== claimIds.length) errors.push(`${label}: duplicate claimIds`);
}

function validateAnswer(answer, record, label, errors, { minimumWords = 8, maximumWords = 180 } = {}) {
  if (!answer || typeof answer !== 'object') {
    errors.push(`${label}: answer object required`);
    return;
  }
  if (!plainText(answer.text)) errors.push(`${label}: plain text is required and HTML is forbidden`);
  const count = words(answer.text);
  if (count < minimumWords || count > maximumWords) errors.push(`${label}: text must contain ${minimumWords}-${maximumWords} words (found ${count})`);
  for (const code of unsafeAffirmativeCodes(answer.text)) errors.push(`${label}: ${code} requires a reviewed rewrite; citations do not authorize unsafe outcome or medication language`);
  validateClaimIds(answer.claimIds, record, label, errors);
}

export function isAllowedEntityType(pageKind, entityType) {
  return pageKind === 'health' ? HEALTH_ENTITY_TYPES.has(entityType) : pageKind === 'food' ? FOOD_ENTITY_TYPES.has(entityType) : false;
}

export function validateApprovedContent(content, record) {
  const errors = [];
  if (!content || typeof content !== 'object') return ['approved content must be an object'];
  if (content.schemaVersion !== 1) errors.push('approved content schemaVersion must be 1');
  if (content.stableId !== record.stableId) errors.push('approved content stableId mismatch');
  if (content.pageKind !== record.pageKind) errors.push('approved content pageKind mismatch');
  if (content.entityType !== record.entityType || !isAllowedEntityType(content.pageKind, content.entityType)) errors.push('approved content entityType mismatch or unsupported type');
  validateAnswer(content.directAnswer, record, 'directAnswer', errors, { minimumWords: 35, maximumWords: 100 });

  if (!Array.isArray(content.sections)) return [...errors, 'sections must be an array'];
  const sectionIds = new Set();
  for (const [sectionIndex, section] of content.sections.entries()) {
    const sectionLabel = `sections[${sectionIndex}]`;
    if (!safeId(section.id)) errors.push(`${sectionLabel}: invalid section id`);
    else if (sectionIds.has(section.id)) errors.push(`${sectionLabel}: duplicate section id ${section.id}`);
    else sectionIds.add(section.id);
    if (!plainText(section.heading)) errors.push(`${sectionLabel}: plain-text heading required`);
    if (!Array.isArray(section.blocks) || section.blocks.length === 0) {
      errors.push(`${sectionLabel}: at least one block required`);
      continue;
    }
    const blockIds = new Set();
    for (const [blockIndex, block] of section.blocks.entries()) {
      const blockLabel = `${sectionLabel}.blocks[${blockIndex}]`;
      if (!safeId(block.id)) errors.push(`${blockLabel}: invalid block id`);
      else if (blockIds.has(block.id)) errors.push(`${blockLabel}: duplicate block id ${block.id}`);
      else blockIds.add(block.id);
      validateAnswer(block, record, blockLabel, errors, { minimumWords: 8, maximumWords: 260 });
      if (blockIndex === 0 && words(block.text) > 120) errors.push(`${blockLabel}: answer-first opening block exceeds 120 words`);
    }
  }

  const required = record.pageKind === 'health' ? HEALTH_REQUIRED_SECTIONS[record.entityType] || [] : FOOD_REQUIRED_SECTIONS;
  for (const sectionId of required) if (!sectionIds.has(sectionId)) errors.push(`missing required section ${sectionId}`);

  // A complete section list must not be enough to publish a skeletal YMYL page.
  // Count the core answer and section prose only so FAQ repetition cannot pad depth.
  const coreWordCount = words(content.directAnswer?.text)
    + content.sections.reduce((total, section) => total
      + (section.blocks || []).reduce((subtotal, block) => subtotal + words(block.text), 0), 0);
  const minimumCoreWords = record.pageKind === 'health' ? 800 : 600;
  if (coreWordCount < minimumCoreWords) {
    errors.push(`core content must contain at least ${minimumCoreWords} words for ${record.pageKind} pages (found ${coreWordCount})`);
  }

  if (content.faqs !== undefined) {
    if (!Array.isArray(content.faqs) || content.faqs.length > 12) errors.push('faqs must be an array with no more than 12 entries');
    else {
      const faqIds = new Set();
      for (const [index, faq] of content.faqs.entries()) {
        const label = `faqs[${index}]`;
        if (!safeId(faq.id)) errors.push(`${label}: invalid id`);
        else if (faqIds.has(faq.id)) errors.push(`${label}: duplicate id`);
        else faqIds.add(faq.id);
        if (!plainText(faq.question) || words(faq.question) < 3) errors.push(`${label}: plain-text question required`);
        validateAnswer(faq.answer, record, `${label}.answer`, errors, { minimumWords: 10, maximumWords: 100 });
      }
    }
  }

  if (content.urgentHelp !== undefined) {
    if (record.pageKind !== 'health') errors.push('urgentHelp is only allowed on health pages');
    validateAnswer(content.urgentHelp, record, 'urgentHelp', errors, { minimumWords: 10, maximumWords: 120 });
  }
  return errors;
}

export function collectContentClaimIds(content) {
  const ids = new Set(content.directAnswer?.claimIds || []);
  for (const section of content.sections || []) for (const block of section.blocks || []) for (const id of block.claimIds || []) ids.add(id);
  for (const faq of content.faqs || []) for (const id of faq.answer?.claimIds || []) ids.add(id);
  for (const id of content.urgentHelp?.claimIds || []) ids.add(id);
  return [...ids].sort();
}
