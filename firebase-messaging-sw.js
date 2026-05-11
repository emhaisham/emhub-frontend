// firebase-messaging-sw.js
// Place this file at the ROOT of your frontend repo (same level as index.html)
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

// Handle background messages
messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification || {};
  const notifTitle = title || 'EM HUB';
  const notifOptions = {
    body: body || '',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    data: payload.data || {},
    vibrate: [200, 100, 200],
    tag: payload.data?.notifId || 'emhub-notif',
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
