import crypto from 'node:crypto';

export const SHA256_PATTERN = /^[a-f0-9]{64}$/;

/**
 * Bind a review decision to the exact UTF-8 bytes that were reviewed.
 * This proves content integrity, not medical accuracy; accuracy still requires
 * the verified reviewer, evidence, and claim checks in the publication graph.
 */
export function sha256Text(text) {
  return crypto.createHash('sha256').update(text, 'utf8').digest('hex');
}

export function reviewFingerprintError(reviewEvent, contentText) {
  if (!reviewEvent || reviewEvent.status !== 'approved') return 'approved review event is missing';
  if (!SHA256_PATTERN.test(reviewEvent.contentSha256 || '')) return 'approved review event has no valid contentSha256';
  if (reviewEvent.contentSha256 !== sha256Text(contentText)) return 'approved review fingerprint does not match the current content bytes';
  return null;
}
