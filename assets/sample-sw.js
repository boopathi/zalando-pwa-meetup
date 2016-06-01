const VERSION = 1;
const CACHE_NAME = `my-awesome-app-${VERSION}`;

const resources = [
  '/path/to/styles.css',
  '/path/to/script.js'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(resources))
  )
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHENAME)
            return caches.delete(key);
        })
      );
    })
  )
});

function ReadThroughNetwork(request) {
  return fetch(request.clone())
    .then(fetchResponse =>
      caches.open(CACHE_NAME)
        .then(cache => {
          cache.put(request, fetchResponse.clone())
          return fetchResponse;
        })
    )
    .catch(err =>
      caches.open(CACHE_NAME)
        .then(cache => cache.match(request))
    );
}

funtion ReadThroughCache(request) {
  return caches.open(CACHE_NAME)
    .then(cache => cache.match(request.clone()))
    .catch(err => ReadThroughNetwork(request));
}

self.addEventListener('fetch', event => {

  if (event.request.url.pathname.endsWith('.js')) {
    event.respondWith(
      ReadThroughCache(event.request)
    );
  }

  else if (event.request.url.pathname === '/') {
    event.respondWith(
      ReadThroughNetwork(event.request)
    );
  }

  // else
  // event.respondWith(fetch(event.request));

});
















// work around for spectacle code-slide
