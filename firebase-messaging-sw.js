// firebase-messaging-sw.js
// Place this file at the ROOT of your frontend repo (same level as index.html)
//
// This service worker handles two things:
//   1. Firebase Cloud Messaging (background push notifications)
//   2. Static-asset caching for faster repeat visits
//
// CACHE STRATEGY:
//   - HTML pages: network-first (always try latest; fall back to cache offline)
//   - Other same-origin GETs (icons, manifest): cache-first
//   - API calls and third-party (Firebase, gstatic, googleapis): bypassed entirely
//
// Bump CACHE_VERSION to force all clients to drop the old cache on next activate.
const CACHE_VERSION = 'emhub-v18';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k.startsWith('emhub-') && k !== CACHE_VERSION).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  // Only handle same-origin requests — let the network handle API/CDN traffic directly
  if (url.origin !== self.location.origin) return;
  // Never cache API responses (they would go through if we let them, but be explicit)
  if (url.pathname.startsWith('/api/')) return;

  const isHTML = event.request.destination === 'document'
              || url.pathname === '/'
              || url.pathname.endsWith('.html');

  if (isHTML) {
    // Network-first: always try fresh, fall back to cache offline
    event.respondWith(
      fetch(event.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(event.request, copy));
        }
        return res;
      }).catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first for static assets (icons, manifest, etc.)
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(event.request, copy));
        }
        return res;
      }))
    );
  }
});

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDeKXvgFOWtabNagzuaIX4qllLZ8GmrPgA",
  authDomain: "emhub-ae6b3.firebaseapp.com",
  projectId: "emhub-ae6b3",
  storageBucket: "emhub-ae6b3.firebasestorage.app",
  messagingSenderId: "331800554236",
  appId: "1:331800554236:web:f4e570bf6b45465e4dc579"
});

const messaging = firebase.messaging();

// Handle background messages.
// The backend now sends a DATA-ONLY payload (no `notification` field) so
// FCM doesn't auto-display alongside this handler. Title and body live in
// payload.data — fall back to payload.notification for older sent messages
// still in flight.
messaging.onBackgroundMessage(payload => {
  const d = payload.data || {};
  const n = payload.notification || {};
  const notifTitle = d.title || n.title || 'EM HUB';
  const notifBody  = d.body  || n.body  || '';
  const notifOptions = {
    body: notifBody,
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    data: d,
    vibrate: [200, 100, 200],
    tag: d.notifId || 'emhub-notif',
    renotify: true,
    actions: [{ action: 'open', title: 'Open EM HUB' }]
  };
  self.registration.showNotification(notifTitle, notifOptions);
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      if (clientList.length > 0) { clientList[0].focus(); return; }
      clients.openWindow('/');
    })
  );
});
