const CACHE_NAME = "ampa-futsal-v1";
const ASSETS = ["./", "./index.html", "./icon.png", "./manifest.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (e) => {
  // Para Firebase y red, intentamos red primero, si falla, caché (si aplica)
  // Pero para la estructura de la app (index.html), caché primero para velocidad.
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});