
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.css',
        '/app.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js',
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js',
        'https://cdn.jsdelivr.net/angular-material-icons/0.4.0/angular-material-icons.min.js',
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css',
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});