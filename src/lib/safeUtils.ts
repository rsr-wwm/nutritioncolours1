// Safe parsing utilities that eliminate ad-hoc try/catch blocks.
// Replaces the pattern: try { JSON.parse(localStorage.getItem(x)) } catch { ... }

import { logger } from './logger';

/**
 * Safely parse a JSON string, returning a fallback value on failure.
 * Handles null/undefined input and malformed JSON without throwing.
 */
export function safeJsonParse<T>(raw: string | null | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    logger.warn('safeJsonParse', 'corrupted JSON, using fallback', {
      preview: raw.slice(0, 100),
    });
    return fallback;
  }
}
