self.addEventListener('install', (e) => {
  console.log('App Installed Successfully');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
