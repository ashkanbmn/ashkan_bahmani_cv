'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f7d656b8ac81fe04a3d07a7f3125bd60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a14adb09f5e3c0d70642234c0f9199e4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc93aefccca260a4818ec25ef7422a4c",
".git/logs/refs/heads/main": "e0ca447287323903046825ac733412db",
".git/logs/refs/remotes/origin/main": "2ea14faa3b358b7148222dfed947fe14",
".git/objects/05/6392a631b955155eca291e40afead5eab1dc85": "780bdef59762fa5c4e3ed10d3fd01a1b",
".git/objects/1d/0478c4f224d02ec7560c0f1bedf36593c99927": "d7be585e87f9e1582e7b8f1ca925504f",
".git/objects/22/4faad21a60419eee1f53bdd7e3034a3f002319": "dafaaac44536e0c05c5116ef7df0976e",
".git/objects/23/66b917645f42e72bfc7029cb00e8b9abd81e34": "50b0527836d2ee49f9438c272255e398",
".git/objects/33/6a73b3906a234d08919cf004b00670616b3a0e": "c84de10098b66e0e235cc8722ed910f5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/2cc7bff3e0f5bad99272a78a6e3e8a5cf5b5cb": "941cfc7518202d29049199658f2972c5",
".git/objects/3a/1dc42b56d190ba49515b60ba3eceb89fbc8188": "f00b9cfa5ad06c16599cf8f01ee55b3a",
".git/objects/3c/82a327222ef1135d23d73a92e560c9593ad447": "f184c37872b005eebf5efdd4bd219bf9",
".git/objects/3f/95b516c36c4c84304437ab58e594185e3a87a5": "287a8283bdf1f9f459406f41fdf328a1",
".git/objects/41/8272c81978b802dacec80f4fe9bdc34b72678a": "93ab3d191553b375ad6216f80f7d0080",
".git/objects/45/54bf3e940c599b3cf7b53e008fcc601dbb0af3": "69f31edc169cf401add3dcb6a180674f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/e6a0372eafcd659bf619a72a0410b9344fd945": "e05d2428b761b4409c0d1e8dcb522567",
".git/objects/58/c4873d74af9771a9849f18b01d41d58da85dc3": "0fb2b7e9968deda60b2693dd5bd290e7",
".git/objects/68/380bdb5bf9051e7c14a9278a945a0a34ee57ab": "f79f2fae7d7f2209b1d2d1b49c123e07",
".git/objects/6d/b016e88671fabc66dd365a90881089d68d6bf0": "927f271716713d3dff0c61050a39e375",
".git/objects/6e/560ef1a8e357774964212f9fa69e2d7ddefc57": "16d781a95fde17d99e574abbc7a5656c",
".git/objects/78/46154c124c1c1b2a2da3273eb4acb579a700b5": "0cffb087b140263e825f47ed43871032",
".git/objects/80/2a0eddb791c65a11e571020a64b0806401dac3": "8cf538c82db641ca0026d8eafa7aa7f6",
".git/objects/81/d4bcf1dd1ab06e46088914aeb64181e65fc3f2": "58a3b1531f812d27690768277b174f75",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/f7f687178a613b28bbddce14b2dd782f7ae0d1": "a7312be0cea882feb0d8ca42269b0d39",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c3/20d343f60f5c4d08d04989092f5acc2aa6e0b1": "4b73a9be86eb04963872fd86d6816ba7",
".git/objects/c6/a028527afb54f5b5ba5fd551928450ed39c71f": "686a1642486ab9af6a7fe99ab1672d20",
".git/objects/ce/7f1e834d5970434945b34dee9b14fa07f43668": "f4f3d3e7cd030edf5e4d257b42d09e41",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4c61df3d3a4beac2184d10c26aafd0bf16d64d": "d8f358979835a6ec106d6537d49beb65",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dc/6c9dd3a0e0e0010fdeea416095ecfa915ba2fe": "a9be0805c5334add16c253b9bb8b5778",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/4005ea0612597018812537faed24caab12ba6c": "ea110cc964e90273b150bbb090279561",
".git/objects/e2/63dded84a2300b461f7c2c9534c049b3a5a827": "34259c3a61c39bb0585e1372df9bf110",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/531b53dd17456da3e6a301b372c3c02d62aee3": "5d19c55e22f48d85928220d33348dac3",
".git/objects/f4/b19fdf5cc4d6922331debc25e62326a1d1c096": "f0f422c714a8ca3f725f2815bd92a485",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "22df2d0d7a79d4ddb0954a0ed999ac3d",
".git/refs/remotes/origin/main": "22df2d0d7a79d4ddb0954a0ed999ac3d",
"assets/AssetManifest.bin": "37b94f1d84a3917f390ee74049489435",
"assets/AssetManifest.json": "dc821abd3b26112c30da5e01603212d1",
"assets/assets/ai.json": "5718341c55af23733f547430892a6295",
"assets/assets/android.json": "5b647c42b8ca8be7bc27239a28ab9933",
"assets/assets/ashkan.jpg": "bbf6bba7e0df76044820d278a88861bf",
"assets/assets/award.json": "560de772e5dce8be26c45d5330359087",
"assets/assets/cv.json": "7694f9db470f05ea07e1c9e18105acd4",
"assets/assets/education.json": "d67c316fd684a90d56b01c18a833598a",
"assets/assets/english_level.json": "571c16136b98d2211b95e54b2fdb0219",
"assets/assets/ios.json": "33476bf9974928ce70b530c2d25d202f",
"assets/assets/programmerOne.json": "004ae2854cccab378ae58492cb1c9b00",
"assets/assets/projects.json": "cd41bee594e8188d63e216f8ba95c021",
"assets/assets/python.json": "30631ee35807e3b7f3430220069e1fac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "946feccef0a62657aaac995c9cddfacd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4bfea5e2b4634553e24c28985338aca3",
"/": "4bfea5e2b4634553e24c28985338aca3",
"main.dart.js": "49fb78fe5b5578405295d0d6db739242",
"manifest.json": "ffad0cf357d45f44a49609c91c89d34d",
"version.json": "2a75a5258c6af88d5a709c76fb43afcb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
