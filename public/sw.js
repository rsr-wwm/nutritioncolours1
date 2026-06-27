// NutritionColours Service Worker
const CACHE_VERSION = 'nutritioncolours-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const DYNAMIC_CACHE = `${CACHE_VERSION}-dynamic`;

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
            .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
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

  // ── Network-first with offline fallback for navigation requests ──
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the navigation response
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then((cachedResponse) => {
              if (cachedResponse) return cachedResponse;
              // SPA Fallback: serve /index.html from static cache to allow React client routing to take over offline
              return caches.match('/index.html')
                .then((indexResponse) => {
                  if (indexResponse) return indexResponse;
                  // If even index.html isn't cached, serve the inline offline fallback page
                  return new Response(OFFLINE_FALLBACK_HTML, {
                    headers: { 'Content-Type': 'text/html' }
                  });
                });
            });
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
