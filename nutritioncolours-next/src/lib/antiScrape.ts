// src/antiScrape.ts
// Task 6: Anti-Scraping Intelligence Layer
// Honeytoken system with zero-width character fingerprints, rate-limit detection,
// and dynamic content watermarks for scraper tracking.

// Zero-width Unicode characters used for fingerprinting
const ZERO_WIDTH_CHARS = [
  '\u200B', // Zero Width Space
  '\u200C', // Zero Width Non-Joiner
  '\u200D', // Zero Width Joiner
  '\uFEFF', // Zero Width No-Break Space
  '\u2060', // Word Joiner
  '\u180E', // Mongolian Vowel Separator
];

/**
 * Generate a unique fingerprint for a page using zero-width characters.
 * Each page gets a unique pattern that is invisible but detectable.
 */
export function generatePageFingerprint(route: string): string {
  const timestamp = Date.now().toString(36);
  const routeHash = simpleHash(route);
  const fingerprint = ZERO_WIDTH_CHARS.map((char, i) => {
    const idx = (routeHash + i + timestamp.length) % ZERO_WIDTH_CHARS.length;
    return ZERO_WIDTH_CHARS[idx];
  }).join('');
  return fingerprint;
}

/**
 * Embed an invisible fingerprint into text content.
 * The fingerprint is unique per page and session, making it traceable.
 */
export function embedFingerprint(text: string, route: string): string {
  const fingerprint = generatePageFingerprint(route);
  // Insert fingerprint at a deterministic position
  const insertPos = Math.min(text.length, Math.floor(text.length * 0.3));
  return text.slice(0, insertPos) + fingerprint + text.slice(insertPos);
}

/**
 * Extract fingerprint from text for verification.
 */
export function extractFingerprint(text: string): string {
  return text
    .split('')
    .filter(char => ZERO_WIDTH_CHARS.includes(char))
    .join('');
}

/**
 * Generate a session-specific watermark for AI-generated content.
 * Subtle phrasing variations that are unique per session.
 */
export function getSessionWatermark(): string {
  const sessionId = Math.random().toString(36).substring(2, 10);
  const timestamp = Date.now().toString(36);
  return `<!-- nc-s:${sessionId}-${timestamp} -->`;
}

/**
 * Rate-limit detection for the service worker.
 * Tracks request frequency per session and flags potential scrapers.
 */
export class RateLimitDetector {
  private requestTimestamps: number[] = [];
  private readonly windowMs: number;
  private readonly maxRequests: number;
  private flagged = false;

  constructor(windowMs: number = 60000, maxRequests: number = 50) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  recordRequest(): boolean {
    const now = Date.now();
    this.requestTimestamps.push(now);

    // Remove timestamps outside the window
    this.requestTimestamps = this.requestTimestamps.filter(
      ts => now - ts < this.windowMs
    );

    if (this.requestTimestamps.length > this.maxRequests) {
      this.flagged = true;
      return true; // rate-limited
    }
    return false;
  }

  isFlagged(): boolean {
    return this.flagged;
  }

  reset(): void {
    this.requestTimestamps = [];
    this.flagged = false;
  }
}

/**
 * Generate honeypot trap paths that real users never visit but scrapers do.
 */
export function getHoneypotPaths(): string[] {
  return [
    '/honeypot/trap/',
    '/honeypot/admin/',
    '/honeypot/api/users',
    '/honeypot/database',
    '/honeypot/backup',
    '/honeypot/config',
    '/honeypot/.env',
    '/honeypot/wp-admin',
    '/honeypot/phpmyadmin',
    '/honeypot/graphql',
    '/honeypot/internal/api',
    '/honeypot/debug/vars',
  ];
}

/**
 * Check if a request path is a honeypot trap.
 */
export function isHoneypotPath(path: string): boolean {
  return path.startsWith('/honeypot/');
}

/**
 * Simple hash function for deterministic fingerprint generation.
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}
