
const CACHE_NAME = "absports-cache-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(
        "ইন্টারনেট সংযোগ পাওয়া যাচ্ছে না।",
        { status: 503 }
      );
    })
  );
});
