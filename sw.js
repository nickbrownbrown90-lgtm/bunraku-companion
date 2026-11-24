const CACHE_NAME = 'bunraku-companion-v1';

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './data/performances.js',
  './data/2026-11-kabuki.js',
  './data/2026-11-bunraku.js',
  './data/2026-12-bunraku.js',
  './data/kabuki-full/nov_kabuki_daijo.js',
  './data/kabuki-full/nov_kabuki_sandanme.js',
  './data/kabuki-full/nov_kabuki_yondanme.js',
  './data/kabuki-full/nov_kabuki_michiyuki.js',
  './data/kabuki-full/nov_kabuki_godanme.js',
  './data/kabuki-full/nov_kabuki_rokudanme.js',
  './data/kabuki-full/nov_kabuki_shichidanme.js',
  './data/kabuki-full/nov_kabuki_juichidanme.js',
  './data/kabuki-full/merge.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (request.mode === 'navigate') {
            return caches.match('./index.html').then((indexRes) => indexRes || caches.match('./'));
          }
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        });
      })
  );
});
