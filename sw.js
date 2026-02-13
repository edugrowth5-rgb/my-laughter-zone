const CACHE_NAME = 'khet-bari-v1';
const assets = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/2510/2510250.png'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
