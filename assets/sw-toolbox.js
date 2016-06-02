importScripts('/path/to/sw-toolbox.js');

const VERSION = 5;
toolbox.cache.name = `my-awesome-app-${VERSION}`;

const resources = [
  '/path/to/script.js',
  '/path/to/style.css'
];

toolbox.precache(resources);

toolbox.router.get(
  '/*',
  toolbox.fastest,
  { origin: 'https://cdn.url' }
);

toolbox.router.get(
  '/',
  toolbox.networkFirst
);
