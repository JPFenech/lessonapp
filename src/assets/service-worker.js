var cacheName = 'lessonapp';
var cacheFiles = [ 
    'public/index.html',
    'app.vue',
    'components/Checkoutz.vue',
    'components/Lessonz.vue',
    'lessons.webmanifest',
    'public/piano.jpg',
    'public/physics.jpg',
    'public/maths.jpg',
    'public/language.jpg',
    'public/karate.jpg',
    'public/gymnastics.jpg',
    'public/guitar.jpg',
    'public/computer.jpg',
    'public/icon512.png'
    
];

self.addEventListener('install', (e) =>  {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (r){
            return r || fetch(e.request).then (function (response){
                 return caches.open(cacheName).then(function(cache){
                     cache.put(e.reuqest, response.clone());
                     return response;
                 });
            });
        })
    );
});