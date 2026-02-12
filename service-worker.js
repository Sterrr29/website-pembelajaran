const CACHE_NAME = "fisika-pwa-v1";
const urlsToCache = [
  "/website-pembelajaran/",
  "/website-pembelajaran/index.html",
  "/website-pembelajaran/1newton.html",
  "/website-pembelajaran/2newton.html",
  "/website-pembelajaran/3newton.html",
  "/website-pembelajaran/latsol.html",
  "/website-pembelajaran/kasus1.html",
  "/website-pembelajaran/kasus2.html",
  "/website-pembelajaran/kasus3.html",
  "/website-pembelajaran/kasus4.html",
  "/website-pembelajaran/kasus5.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
