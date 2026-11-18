// public/sw.js
const CACHE_NAME = 'cog-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Let the browser do its default thing for non-GET requests
  if (event.request.method !== 'GET') return;
  
  // A simple "Network First, fallback to Cache" strategy
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});