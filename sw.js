// NutritionColours Service Worker v3
// Enhanced with: Periodic Background Sync, Stale-While-Revalidate, Data Saver Mode
const CACHE_VERSION = 'nutritioncolours-v3';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;
const DATA_CACHE = `${CACHE_VERSION}-data`;
const AI_QUEUE_CACHE = `${CACHE_VERSION}-ai-queue`;

// Cache TTLs
const HTML_CACHE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days for HTML
const DATA_CACHE_MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours for data feeds

// Clinical data feeds to periodically refresh
const CLINICAL_DATA_FEEDS = [
  '/data/clinical-feed.json',
  '/data/conditions.json',
  '/data/herbs.json',
  '/data/featured-snippets.json',
  '/data/content-freshness.json'
];

// Static assets to pre-cache during install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/particle-worker.js',
  '/scripts/bot-shield.js',
  '/scripts/partytown-setup.js',
  '/fonts/inter-latin-400-normal.woff2',
  '/fonts/inter-latin-500-normal.woff2',
  '/fonts/inter-latin-600-normal.woff2'
];

// Offline fallback page (served as inline HTML when network is unavailable)
const OFFLINE_FALLBACK_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offline | NutritionColours</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
      background: #fafaf9;
      color: #1c1917;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }
    .container {
      text-align: center;
      max-width: 480px;
    }
    .icon { font-size: 4rem; margin-bottom: 1.5rem; }
    h1 {
      font-size: 1.5rem;
      color: #065f46;
      margin-bottom: 0.75rem;
    }
    p {
      color: #57534e;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    .btn {
      display: inline-block;
      text-decoration: none;
      background: #065f46;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn:hover { background: #047857; }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🍃</div>
    <h1>You're Offline</h1>
    <p>It looks like you've lost your internet connection. Please check your network and try again.</p>
    <a href="" class="btn">Try Again</a>
  </div>
</body>
</html>`;

// ── Install Event ──────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate Event (clean up old caches) ───────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE && name !== DATA_CACHE && name !== AI_QUEUE_CACHE)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// ── Periodic Background Sync (refresh clinical data every 24h) ─────────────
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'refresh-clinical-data') {
    event.waitUntil(refreshClinicalDataFeeds());
  }
});

// ── Background Sync (replay queued AI chat requests) ───────────────────────
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-ai-queue') {
    event.waitUntil(processAIQueue());
  }
});

async function refreshClinicalDataFeeds() {
  const cache = await caches.open(DATA_CACHE);
  for (const feedUrl of CLINICAL_DATA_FEEDS) {
    try {
      const response = await fetch(feedUrl);
      if (response.ok) {
        await cache.put(feedUrl, response);
      }
    } catch (e) {
      // Feed refresh failed, keep existing cached version
    }
  }
}

async function processAIQueue() {
  const cache = await caches.open(AI_QUEUE_CACHE);
  const keys = await cache.keys();
  for (const request of keys) {
    try {
      const queuedRequest = await cache.match(request);
      if (queuedRequest) {
        const body = await queuedRequest.json();
        // Replay the queued AI request
        await fetch(body.url, {
          method: 'POST',
          headers: body.headers,
          body: JSON.stringify(body.payload)
        });
        await cache.delete(request);
      }
    } catch (e) {
      // Will retry on next sync
    }
  }
}

/**
 * Register periodic sync for clinical data refresh.
 * Called from the main thread when the SW is ready.
 */
async function registerPeriodicSync() {
  if ('periodicSync' in self.registration) {
    try {
      await self.registration.periodicSync.register('refresh-clinical-data', {
        minInterval: 24 * 60 * 60 * 1000 // 24 hours
      });
    } catch (e) {
      // Periodic sync not supported or permission denied
    }
  }
}

// Register on activate
self.addEventListener('activate', () => {
  registerPeriodicSync();
});

// ── Fetch Event ────────────────────────────────────────────────────────────

/**
 * Determines if a request is an API call.
 * Adjust the patterns below to match your project's API endpoints.
 */
function isApiRequest(url) {
  return (
    url.pathname.startsWith('/api/') ||
    url.hostname.includes('generativelanguage.googleapis.com')
  );
}

/**
 * Determines if a request is for a static asset (CSS, JS, fonts, images).
 */
function isStaticAsset(url) {
  const staticExtensions = /\.(css|js|mjs|woff2?|ttf|otf|eot|png|jpe?g|gif|svg|webp|avif|ico|wasm)$/i;
  return staticExtensions.test(url.pathname);
}

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle http/https requests (skip chrome-extension://, etc.)
  if (!url.protocol.startsWith('http')) return;

  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // ── Data Saver Mode: serve minimal content when saveData is on ──
  const isDataSaver = navigator.connection && navigator.connection.saveData;

  // ── Network-first strategy for API calls ──
  if (isApiRequest(url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache a clone of successful API responses for offline use
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Fall back to cached API response if network fails
          return caches.match(event.request);
        })
    );
    return;
  }

  // ── Stale-while-revalidate for JSON data feeds ──
  if (url.pathname.startsWith('/data/') && url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.open(DATA_CACHE).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        // Return cache immediately (stale), background update runs async
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // ── Cache-first strategy for static assets ──
  if (isStaticAsset(url)) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((networkResponse) => {
            // Cache the new static asset for future use
            if (networkResponse.ok) {
              const responseClone = networkResponse.clone();
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          });
        })
        .catch(() => {
          // For failed image requests, return a transparent 1x1 pixel
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(url.pathname)) {
            return new Response(
              '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>',
              { headers: { 'Content-Type': 'image/svg+xml' } }
            );
          }
        })
    );
    return;
  }

  // ── Stale-while-revalidate for navigation (HTML pages) ──
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.open(DYNAMIC_CACHE).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        
        // Data saver: return cache immediately, skip network
        if (isDataSaver && cachedResponse) {
          return cachedResponse;
        }

        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
          return caches.match('/index.html').then((indexResponse) => {
            if (indexResponse) return indexResponse;
            return new Response(OFFLINE_FALLBACK_HTML, {
              headers: { 'Content-Type': 'text/html' }
            });
          });
        });

        // Return cache immediately if available (stale), network response updates cache
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // ── Default: Network-first for everything else ──
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
