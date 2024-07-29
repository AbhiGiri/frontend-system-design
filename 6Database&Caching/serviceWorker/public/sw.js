const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/app.js',
  '/image.gif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(res => res || fetch(event.request)));
});