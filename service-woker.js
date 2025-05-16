self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("calcvini-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./service-worker.js"
        // adiciona também ícones se tiver
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});