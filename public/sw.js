/* Loksewa Pro service worker — app-shell offline support.
 * Strategy:
 * - Navigations & API (GET): network-first, fall back to cache, then /offline
 * - Static hashed assets (/_next/static/): cache-first
 * - Never cache non-GET requests.
 */
const STATIC_CACHE = "loksewa-pro-static-v1";
const RUNTIME_CACHE = "loksewa-pro-runtime-v1";
const OFFLINE_URL = "/offline";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.add(OFFLINE_URL).catch(() => undefined))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== RUNTIME_CACHE)
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Versioned Next.js static assets: cache-first
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const res = await fetch(request);
        if (res.ok) cache.put(request, res.clone());
        return res;
      })
    );
    return;
  }

  // Icons & manifest: cache-first
  if (
    url.pathname.startsWith("/icons/") ||
    url.pathname.endsWith(".webmanifest")
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;
        try {
          const res = await fetch(request);
          if (res.ok) cache.put(request, res.clone());
          return res;
        } catch {
          return cached ?? Response.error();
        }
      })
    );
    return;
  }

  // Navigations and API GETs: network-first with offline fallback
  event.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok && request.url.startsWith("http")) {
          const copy = res.clone();
          caches
            .open(RUNTIME_CACHE)
            .then((cache) => cache.put(request, copy))
            .catch(() => undefined);
        }
        return res;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") {
          const offline = await caches.match(OFFLINE_URL);
          if (offline) return offline;
        }
        return Response.error();
      })
  );
});
