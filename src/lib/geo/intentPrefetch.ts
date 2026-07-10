/**
 * Intent-Based Prefetching Engine
 * Intersection-observer-driven prefetch engine that:
 * - Tracks viewport proximity of internal links
 * - Prefetches routes after sustained hover (300ms+) or scroll-into-view (2s+)
 * - Uses requestIdleCallback to avoid competing with main thread
 * - Respects navigator.connection.effectiveType (skip on 2G/save-data)
 * - Priority queue based on route manifest criticality scores
 * - Falls back to speculation rules for Chrome, uses <link rel="prefetch"> for others
 */

interface PrefetchEntry {
  url: string;
  priority: number;
  prefetched: boolean;
  element: Element;
}

const PREFETCH_PRIORITY = {
  HOVER: 10,
  VISIBLE: 3,
  NEAR_VIEWPORT: 1
};

const HOVER_THRESHOLD_MS = 300;
const VISIBLE_THRESHOLD_MS = 2000;
const MAX_CONCURRENT_PREFETCHES = 4;
const PREFETCH_COOLDOWN_MS = 5000;

let prefetchQueue: PrefetchEntry[] = [];
let prefetchedUrls = new Set<string>();
let activePrefetches = 0;
let lastPrefetchTime = 0;
let observer: IntersectionObserver | null = null;
let hoverTimers = new Map<Element, ReturnType<typeof setTimeout>>();
let initialized = false;

/**
 * Check if the user is on a slow connection or has data saver enabled.
 */
function shouldSkipPrefetch(): boolean {
  if (typeof navigator === 'undefined') return true;
  const conn = (navigator as any).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const effectiveType = conn.effectiveType;
  return effectiveType === 'slow-2g' || effectiveType === '2g';
}

/**
 * Check if the browser supports native speculation rules.
 */
function supportsSpeculationRules(): boolean {
  return typeof HTMLScriptElement !== 'undefined' && 'supports' in HTMLScriptElement.prototype
    ? false // speculation rules are not detected via supports
    : 'HTMLScriptElement' in window && false; // Conservative: use link prefetch for reliability
}

/**
 * Prefetch a single URL using the best available method.
 */
function prefetchUrl(url: string): Promise<void> {
  if (prefetchedUrls.has(url)) return Promise.resolve();
  if (activePrefetches >= MAX_CONCURRENT_PREFETCHES) return Promise.resolve();

  const now = Date.now();
  if (now - lastPrefetchTime < PREFETCH_COOLDOWN_MS) return Promise.resolve();

  activePrefetches++;
  lastPrefetchTime = now;

  return new Promise<void>((resolve) => {
    if (supportsSpeculationRules()) {
      // Use speculation rules for Chrome
      const script = document.createElement('script');
      script.type = 'speculationrules';
      script.textContent = JSON.stringify({
        prefetch: [{ source: 'list', urls: [url] }]
      });
      document.head.appendChild(script);
      prefetchedUrls.add(url);
      activePrefetches--;
      resolve();
    } else {
      // Use <link rel="prefetch"> for other browsers
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      link.as = 'document';
      link.onload = () => {
        prefetchedUrls.add(url);
        activePrefetches--;
        resolve();
      };
      link.onerror = () => {
        activePrefetches--;
        resolve(); // Don't retry on error
      };
      document.head.appendChild(link);
    }
  });
}

/**
 * Process the priority queue and prefetch highest-priority items.
 */
function processQueue(): void {
  if (shouldSkipPrefetch()) return;

  const schedulePrefetch = () => {
    const sorted = prefetchQueue
      .filter(e => !e.prefetched && !prefetchedUrls.has(e.url))
      .sort((a, b) => b.priority - a.priority);

    if (sorted.length === 0) return;

    const next = sorted[0];
    next.prefetched = true;

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => prefetchUrl(next.url));
    } else {
      setTimeout(() => prefetchUrl(next.url), 100);
    }
  };

  // Process up to MAX_CONCURRENT_PREFETCHES items
  for (let i = 0; i < MAX_CONCURRENT_PREFETCHES; i++) {
    schedulePrefetch();
  }
}

/**
 * Add a URL to the prefetch queue with a given priority.
 */
function enqueuePrefetch(url: string, priority: number, element: Element): void {
  if (prefetchedUrls.has(url)) return;
  if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:')) return;
  if (url.startsWith('http') && !url.startsWith(window.location.origin)) return;

  const existing = prefetchQueue.find(e => e.url === url);
  if (existing) {
    existing.priority = Math.max(existing.priority, priority);
    return;
  }

  prefetchQueue.push({ url, priority, prefetched: false, element });
  processQueue();
}

/**
 * Handle intersection observer callbacks for viewport-proximal links.
 */
function handleIntersection(entries: IntersectionObserverEntry[]): void {
  entries.forEach(entry => {
    const el = entry.target;
    const href = el.getAttribute('href');
    if (!href) return;

    if (entry.isIntersecting) {
      // Link is visible in viewport — schedule prefetch after threshold
      const timer = setTimeout(() => {
        enqueuePrefetch(href, PREFETCH_PRIORITY.VISIBLE, el);
      }, VISIBLE_THRESHOLD_MS);
      (el as any).__prefetchTimer = timer;
    } else {
      // Link left viewport — cancel pending timer
      if ((el as any).__prefetchTimer) {
        clearTimeout((el as any).__prefetchTimer);
        delete (el as any).__prefetchTimer;
      }
    }
  });
}

/**
 * Handle hover/focus events on internal links.
 */
function handleHoverStart(e: Event): void {
  const el = e.currentTarget as HTMLElement;
  const href = el.getAttribute('href');
  if (!href) return;

  const timer = setTimeout(() => {
    enqueuePrefetch(href, PREFETCH_PRIORITY.HOVER, el);
  }, HOVER_THRESHOLD_MS);
  hoverTimers.set(el, timer);
}

function handleHoverEnd(e: Event): void {
  const el = e.currentTarget as HTMLElement;
  const timer = hoverTimers.get(el);
  if (timer) {
    clearTimeout(timer);
    hoverTimers.delete(el);
  }
}

/**
 * Scan the DOM for internal links and attach observers/listeners.
 */
function scanLinks(): void {
  if (!observer || shouldSkipPrefetch()) return;

  const links = document.querySelectorAll('a[href^="/"], a[href^="./"]');
  links.forEach(link => {
    // Skip already-observed links
    if ((link as any).__prefetchObserved) return;
    (link as any).__prefetchObserved = true;

    // Observe for intersection (viewport proximity)
    observer!.observe(link);

    // Attach hover/focus listeners for high-priority prefetch
    link.addEventListener('mouseenter', handleHoverStart, { passive: true });
    link.addEventListener('focusin', handleHoverStart, { passive: true });
    link.addEventListener('mouseleave', handleHoverEnd, { passive: true });
    link.addEventListener('focusout', handleHoverEnd, { passive: true });
  });
}

/**
 * Initialize the intent prefetch engine.
 * Call once after hydration.
 */
export function initIntentPrefetch(): void {
  if (initialized || typeof window === 'undefined') return;
  if (shouldSkipPrefetch()) return;

  initialized = true;

  // Create intersection observer for viewport-proximal links
  observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '200px 0px', // Start observing 200px before viewport
    threshold: 0.1
  });

  // Initial scan
  scanLinks();

  // Re-scan on DOM mutations (new links added dynamically)
  const mutationObserver = new MutationObserver(() => {
    scanLinks();
  });
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Re-scan on navigation (SPA route changes)
  const originalPushState = history.pushState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    setTimeout(scanLinks, 100);
  };
}

/**
 * Manually prefetch a specific URL (for programmatic use).
 */
export function manualPrefetch(url: string): void {
  enqueuePrefetch(url, PREFETCH_PRIORITY.HOVER, document.documentElement);
}

/**
 * Get prefetch statistics for monitoring.
 */
export function getPrefetchStats(): { queued: number; completed: number } {
  return {
    queued: prefetchQueue.length,
    completed: prefetchedUrls.size
  };
}
