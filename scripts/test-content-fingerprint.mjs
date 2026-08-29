import assert from 'node:assert/strict';
import { reviewFingerprintError, sha256Text } from './lib/content-fingerprint.mjs';

const exactContent = '{"stableId":"health-example","text":"Reviewed content"}\n';
const event = { status: 'approved', contentSha256: sha256Text(exactContent) };

assert.equal(reviewFingerprintError(event, exactContent), null, 'exact reviewed bytes should pass');
assert.match(reviewFingerprintError(event, exactContent.trim()), /does not match/, 'even a byte-level content change should invalidate approval');
assert.match(reviewFingerprintError({ status: 'approved', contentSha256: 'not-a-hash' }, exactContent), /no valid/, 'malformed fingerprints should fail closed');
assert.match(reviewFingerprintError(null, exactContent), /missing/, 'missing review events should fail closed');

console.log('Content fingerprint mutation suite passed: exact bytes remain bound to approval.');
