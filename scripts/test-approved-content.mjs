import assert from 'node:assert/strict';
import { validateApprovedContent } from './lib/approved-content-policy.mjs';

const claimIds = ['claim:example:definition'];
const record = {
  stableId: 'health-example-condition', pageKind: 'health', entityType: 'condition', claimIds,
};
const answer = (id, text = 'This evidence-based explanation states the bounded fact clearly and includes appropriate context for readers without implying diagnosis, treatment instructions, or a guaranteed outcome.') => ({ id, text, claimIds });
const section = (id) => ({
  id,
  heading: id.replaceAll('-', ' '),
  blocks: Array.from({ length: 5 }, (_, index) => answer(`${id}-answer-${index + 1}`)),
});
const valid = {
  schemaVersion: 1,
  stableId: record.stableId,
  pageKind: record.pageKind,
  entityType: record.entityType,
  directAnswer: {
    text: 'Example condition is an educational test entity used to verify a safe health-page contract. This answer explains its scope, identifies that individual assessment belongs with qualified professionals, and avoids diagnosis, treatment instructions, or outcome promises while preserving enough context for independent extraction by search and answer systems.',
    claimIds,
  },
  sections: ['overview', 'symptoms', 'causes-risk-factors', 'assessment', 'care', 'nutrition', 'limitations'].map(section),
  faqs: [{ id: 'what-it-means', question: 'What does the example condition mean?', answer: answer('faq-answer') }],
};
assert.deepEqual(validateApprovedContent(valid, record), [], 'valid health content must pass');

const mutations = [
  ['wrong stable ID', { ...valid, stableId: 'health-wrong' }],
  ['missing required section', { ...valid, sections: valid.sections.filter((item) => item.id !== 'assessment') }],
  ['HTML injection', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} <script>alert(1)</script>` } }],
  ['undeclared claim', { ...valid, directAnswer: { ...valid.directAnswer, claimIds: ['claim:invented'] } }],
  ['duplicate section', { ...valid, sections: [...valid.sections, valid.sections[0]] }],
  ['wrong entity type', { ...valid, entityType: 'fruit' }],
  ['thin core content', { ...valid, sections: valid.sections.map((item) => ({ ...item, blocks: item.blocks.slice(0, 1) })) }],
  ['affirmative cure promise', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} This food can cure the condition.` } }],
  ['medication-change instruction', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} Stop your medication immediately.` } }],
  ['universal outcome promise', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} This approach works for everyone.` } }],
  ['detox promise', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} This drink can detox your body.` } }],
  ['absolute safety promise', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} The method is completely safe.` } }],
  ['care-avoidance instruction', { ...valid, directAnswer: { ...valid.directAnswer, text: `${valid.directAnswer.text} There is no need to see a doctor.` } }],
];
for (const [name, mutant] of mutations) assert(validateApprovedContent(mutant, record).length > 0, `${name} mutant must fail`);

const foodRecord = { stableId: 'food-example', pageKind: 'food', entityType: 'fruit', claimIds };
const foodContent = {
  ...valid,
  stableId: foodRecord.stableId,
  pageKind: 'food',
  entityType: 'fruit',
  sections: ['identity', 'composition', 'preparation-storage', 'safety', 'health-evidence', 'variability'].map(section),
  urgentHelp: answer('urgent'),
};
assert(validateApprovedContent(foodContent, foodRecord).some((error) => error.includes('only allowed on health')), 'food urgent-help mutant must fail');

console.log(`Approved-content mutation suite passed: ${mutations.length + 1} invalid content states rejected.`);
