const CACHE = 'g-kentei-v1';
const ASSETS = [
  '/g-kentei-app/',
  '/g-kentei-app/index.html',
  '/g-kentei-app/questions.js',
  '/g-kentei-app/questions2.js',
  '/g-kentei-app/manifest.json',
  '/g-kentei-app/icon-192.png',
  '/g-kentei-app/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
