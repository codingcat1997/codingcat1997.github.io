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
  'https://fonts.googleapis.com/css?family=VT323&display=swap',
  'https://lh3.googleusercontent.com/9cN6QlJzucqSLVww0z6JNtw5BlDiZTkHM8rNIlSnKNpmp8OqQLVpY9Vzv6B5adWHoGOAdvAxUexkx9NmGzuNOVmi9RtgefnvbLtNm1R-pRiPR3h-SYf2HuVEQb287A-dfbvtFuguwVCWSl8EkecYg8NULRVUzpwCqAtAn-j14CPraC_vb47WcMqcJAgW-Z8k88I1xi8DSOruYl_LT4SdoJhI0Q8aZ6TpA_cPdL9-9ufO89450o4Owabh-NEuy2BzmPAOGzLXR8rKImFYnYPeKH2ZJ-QM-5XLmAUtAJZle9ONWk-_6ZD49e3m3X1NsRBrl5sw1bq1Rd4_Dq4fMIajFSitl3mYdlm9UpCMxqD73cgmx9Ju6PPaoyxBj-rNCx0mhdJUZm6GS5zkl5bb9WCCWdUbUhs1VZ0jvQXW2TwJ_9-WSINBgMnl3Oi5AycAiPRCFJzN31gMv5YXM5qIXHBeCzpiqlAQo9KtsSpasIavyyhLwLM6ZBmw1VDWJdUBY3A6pU_qsMPaXui4FIWta_rCBycrAEuvbv_6AOslqHJGKcs_YLkqEY8E9pPyKM9wmhRN9H3H2nEkrt3scMWbYSuCCjmYrp9VhYjmS06DmhV_fDcxjotqbT8jWDllXz-_stDEENaVsGZg9dxeMCxxRWkY4BqF1GWezfH9nShOqLGPUQPVBECwqGIsoAX6TEeswUrT316DIHUr2V4ExJKLAY3U6nL4ynAbbNEPby5gCPfMuek6be9Law=s512-no'
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
   evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});