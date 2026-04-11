const CACHE_NAME = 'activetrack-v10';
const ASSETS = [
    './activetrack.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Install: cache all assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch: network first, fall back to cache (ensures updates load)
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Update cache with fresh version
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, clone);
                });
                return response;
            })
            .catch(() => {
                // Offline: serve from cache
                return caches.match(event.request);
            })
    );
});

// Show notification from service worker (works when app is backgrounded)
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'show-notification') {
        const lastCategory = event.data.lastCategory || '';
        const body = lastCategory
            ? `Time to log — last: ${lastCategory}`
            : 'Time to log your activity';
        self.registration.showNotification('ActiveTrack', {
            body: body,
            icon: './icon-192.png',
            tag: 'activetrack-prompt',
            renotify: true
        });
    }
});
