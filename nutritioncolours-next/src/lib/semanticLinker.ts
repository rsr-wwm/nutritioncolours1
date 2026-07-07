// src/semanticLinker.ts
// Task 11: Invisible Internal Link Graph (PageRank Sculpting)
// Computes semantic link priority and injects contextual internal links
// for maximum crawl equity distribution.

import semanticLinksData from './semantic_links.json';

export interface SemanticLink {
  id: string;
  type: string;
  path: string;
  title: string;
}

// High-value pages that should receive the most link equity
const HIGH_VALUE_PATTERNS = [
  '/plans', '/condition/', '/topic/diabetes', '/topic/pcos',
  '/topic/fatty-liver', '/topic/insulin', '/tools', '/clinics',
];

// Pages that should NOT pass link equity
const NOFOLLOW_PATTERNS = ['/honeypot/', '/admin', '/api/'];

/**
 * Get semantic links for a given page context key.
 */
export function getSemanticLinks(contextKey: string): SemanticLink[] {
  const links = (semanticLinksData as Record<string, SemanticLink[]>)[contextKey];
  return links || [];
}

/**
 * Compute a simple PageRank-like priority score for each route.
 * Higher score = more internal links should point to it.
 */
export function computePageRankPriority(): Map<string, number> {
  const scores = new Map<string, number>();
  const linkMap = semanticLinksData as Record<string, SemanticLink[]>;

  // Initialize all pages with base score
  const allPages = new Set<string>();
  for (const links of Object.values(linkMap)) {
    for (const link of links) {
      allPages.add(`/${link.path}`);
    }
  }
  allPages.forEach(page => scores.set(page, 1.0));

  // Iterative PageRank computation (3 iterations)
  const dampingFactor = 0.85;
  for (let iter = 0; iter < 3; iter++) {
    const newScores = new Map<string, number>();
    allPages.forEach(page => newScores.set(page, (1 - dampingFactor)));

    for (const [source, links] of Object.entries(linkMap)) {
      const sourceScore = scores.get(`/${source}`) || 1.0;
      const outDegree = links.length;
      if (outDegree === 0) continue;

      const contribution = (dampingFactor * sourceScore) / outDegree;
      for (const link of links) {
        const target = `/${link.path}`;
        newScores.set(target, (newScores.get(target) || 0) + contribution);
      }
    }

    newScores.forEach((score, page) => scores.set(page, score));
  }

  return scores;
}

/**
 * Get the top N most important links for a given context,
 * sorted by PageRank priority.
 */
export function getTopSemanticLinks(contextKey: string, n: number = 8): SemanticLink[] {
  const links = getSemanticLinks(contextKey);
  const priorities = computePageRankPriority();

  return links
    .map(link => ({
      ...link,
      priority: priorities.get(`/${link.path}`) || 1.0,
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, n);
}

/**
 * Determine if a link should be dofollow or nofollow.
 */
export function getLinkRel(path: string): string {
  if (NOFOLLOW_PATTERNS.some(p => path.includes(p))) {
    return 'nofollow';
  }
  // Default: dofollow (no rel attribute needed, but explicit for clarity)
  return 'dofollow';
}

/**
 * Check if a page is high-value (should receive more link equity).
 */
export function isHighValuePage(path: string): boolean {
  return HIGH_VALUE_PATTERNS.some(p => path.startsWith(p));
}

/**
 * Generate a hidden semantic navigation block for crawlers.
 * Returns HTML string for injection at bottom of page.
 */
export function generateSemanticNavBlock(contextKey: string): string {
  const links = getTopSemanticLinks(contextKey, 10);
  if (links.length === 0) return '';

  const items = links.map(link => {
    const rel = getLinkRel(link.path);
    const relAttr = rel === 'nofollow' ? ' rel="nofollow"' : '';
    return `<li><a href="/${link.path}"${relAttr}>${link.title}</a></li>`;
  }).join('\n');

  return `<nav aria-label="Semantic connections" style="position:absolute;left:-9999px;overflow:hidden;" aria-hidden="true">
<ul>
${items}
</ul>
</nav>`;
}

/**
 * Generate React-compatible semantic link data for component rendering.
 */
export function getSemanticLinkData(contextKey: string) {
  const links = getTopSemanticLinks(contextKey, 10);
  return links.map(link => ({
    href: `/${link.path}`,
    title: link.title,
    rel: getLinkRel(link.path),
    isHighValue: isHighValuePage(link.path),
    type: link.type,
  }));
}
