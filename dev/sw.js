const staticCacheName = 'site-static';
const assets = [
  '/dev/',
  '/dev/index.html',
  '/dev/script.js',
  '/dev/stylesheet.css',
  '/',
  '/index.html',
  '/script.js',
  '/stylesheet.css',
  'https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.5/push.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css',
  'https://fonts.googleapis.com/css?family=Pacifico&display=swap',
  'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://kit.fontawesome.com/64edab8c67.js',
  'https://fonts.googleapis.com/css?family=VT323&display=swap'
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
});