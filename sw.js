const CACHE_NAME = 'hanson-v3';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/512/1653/1653630.png'
];

// App install hote waqt files save karna
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Offline mode mein files yahan se uthana
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

