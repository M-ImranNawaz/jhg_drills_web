'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e3a063c70346c1974f845e3dd4fac8c7",
"version.json": "37cdca4796af214796972cc6b60cee47",
"index.html": "20e2a44254d06c623c8f62dc53feddb0",
"/": "20e2a44254d06c623c8f62dc53feddb0",
"main.dart.js": "ac8054ada7fb20b516a64b7a1113e561",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "56480926ff5167fbcf6cc721342379ef",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2e0e67d676d7c1cd6f3be46d10947634",
"assets/web/assets/audio/ping1.mp3": "8f0f20404c0ba6387cddce54664ad5a3",
"assets/web/assets/audio/ping2.mp3": "acb314a653e5fbab92857c4fe9bd4e67",
"assets/web/assets/audio/protoolsMarimba2.mp3": "9d4034fd3f88b36922bada568da15c61",
"assets/web/assets/audio/seiko1.mp3": "360bc6a659529e4fd0a60142522720cc",
"assets/web/assets/audio/protoolsMarimba1.mp3": "20e2f12da19b2c0b00141060648b1187",
"assets/web/assets/audio/seiko2.mp3": "1037552c537b7bcab328dad12df00334",
"assets/web/assets/audio/fLStudio1.mp3": "82c86e30634ad711d9cfca9fabaf8fc8",
"assets/web/assets/audio/logic1.mp3": "99a6b973ab1c6e117e3ec3b931f98771",
"assets/web/assets/audio/fLStudio2.mp3": "4d52265aca2e2d14f1c1109b366edf80",
"assets/web/assets/audio/logic2.mp3": "f90da22e0e289e329733adee59c3b755",
"assets/web/assets/audio/click2.mp3": "e6f10bebeb5c64396b3a2cff774877bc",
"assets/web/assets/audio/reason2.mp3": "d58f46e9b0221fb5c98a5925050fa610",
"assets/web/assets/audio/click1.mp3": "ef13e3b3609401c1506d99a3ebe59401",
"assets/web/assets/audio/reason1.mp3": "7c35540fdb5b7f27af72ec0211b2c09c",
"assets/web/assets/audio/ableton2.mp3": "a306f94605487901fb86371fd5a0c55a",
"assets/web/assets/audio/drumsticks1.mp3": "688a384c21fc0693a194a696a2b7acc1",
"assets/web/assets/audio/maschine2.mp3": "65a2a3659fc43c83ff6968196cc9cceb",
"assets/web/assets/audio/mpc2.mp3": "d41d8cd98f00b204e9800998ecf8427e",
"assets/web/assets/audio/ableton1.mp3": "2c4bf87b2a77551e9f3d21e63c8c8eaf",
"assets/web/assets/audio/drumsticks2.mp3": "5f274c371ee02de9a23e4dbe763200df",
"assets/web/assets/audio/maschine1.mp3": "bd8341120016dd59968fb3a13b8f48ab",
"assets/web/assets/audio/mpc1.mp3": "d41d8cd98f00b204e9800998ecf8427e",
"assets/web/assets/audio/cubase1.mp3": "a89f3313bc2105479552bfc7589f7774",
"assets/web/assets/audio/cubase2.mp3": "999bb0679b4363301873fa14bb838947",
"assets/web/assets/audio/sonar2.mp3": "acb314a653e5fbab92857c4fe9bd4e67",
"assets/web/assets/audio/protoolsDefault2.mp3": "11ef1546a5b6a5b29c88a80b52c050f3",
"assets/web/assets/audio/sonar1.mp3": "8f0f20404c0ba6387cddce54664ad5a3",
"assets/web/assets/audio/protoolsDefault1.mp3": "108a9c31ceb78bab190cacf69e782f45",
"assets/AssetManifest.json": "3b0b79ac778014d7285c681bbdbe297d",
"assets/NOTICES": "e597024e209b39d61edd467f866b3330",
"assets/audio/ping1.mp3": "8f0f20404c0ba6387cddce54664ad5a3",
"assets/audio/ping2.mp3": "acb314a653e5fbab92857c4fe9bd4e67",
"assets/audio/protoolsMarimba2.mp3": "9d4034fd3f88b36922bada568da15c61",
"assets/audio/seiko1.mp3": "360bc6a659529e4fd0a60142522720cc",
"assets/audio/protoolsMarimba1.mp3": "20e2f12da19b2c0b00141060648b1187",
"assets/audio/seiko2.mp3": "1037552c537b7bcab328dad12df00334",
"assets/audio/fLStudio1.mp3": "82c86e30634ad711d9cfca9fabaf8fc8",
"assets/audio/logic1.mp3": "99a6b973ab1c6e117e3ec3b931f98771",
"assets/audio/fLStudio2.mp3": "4d52265aca2e2d14f1c1109b366edf80",
"assets/audio/logic2.mp3": "f90da22e0e289e329733adee59c3b755",
"assets/audio/click2.mp3": "e6f10bebeb5c64396b3a2cff774877bc",
"assets/audio/reason2.mp3": "d58f46e9b0221fb5c98a5925050fa610",
"assets/audio/click1.mp3": "ef13e3b3609401c1506d99a3ebe59401",
"assets/audio/reason1.mp3": "7c35540fdb5b7f27af72ec0211b2c09c",
"assets/audio/ableton2.mp3": "a306f94605487901fb86371fd5a0c55a",
"assets/audio/drumsticks1.mp3": "688a384c21fc0693a194a696a2b7acc1",
"assets/audio/maschine2.mp3": "65a2a3659fc43c83ff6968196cc9cceb",
"assets/audio/mpc2.mp3": "d41d8cd98f00b204e9800998ecf8427e",
"assets/audio/ableton1.mp3": "2c4bf87b2a77551e9f3d21e63c8c8eaf",
"assets/audio/drumsticks2.mp3": "5f274c371ee02de9a23e4dbe763200df",
"assets/audio/maschine1.mp3": "bd8341120016dd59968fb3a13b8f48ab",
"assets/audio/mpc1.mp3": "d41d8cd98f00b204e9800998ecf8427e",
"assets/audio/cubase1.mp3": "a89f3313bc2105479552bfc7589f7774",
"assets/audio/cubase2.mp3": "999bb0679b4363301873fa14bb838947",
"assets/audio/sonar2.mp3": "acb314a653e5fbab92857c4fe9bd4e67",
"assets/audio/protoolsDefault2.mp3": "11ef1546a5b6a5b29c88a80b52c050f3",
"assets/audio/sonar1.mp3": "8f0f20404c0ba6387cddce54664ad5a3",
"assets/audio/protoolsDefault1.mp3": "108a9c31ceb78bab190cacf69e782f45",
"assets/FontManifest.json": "9b0c4cf0e5901795e1b9e19afcb637a6",
"assets/AssetManifest.bin.json": "b848631ae1e47a658dc3e31785f3d30f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/reg_page/fonts/SourceSans3-Regular.ttf": "72a368e7e2bcbd83f75c763aa19d8bf4",
"assets/packages/reg_page/fonts/SourceSans3-Bold.ttf": "91e42896d12340dc2039cf7098cf6682",
"assets/packages/reg_page/fonts/SourceSans3-Italic.ttf": "f3045d777d56404bc6cebb77199e360f",
"assets/packages/reg_page/fonts/SourceSans3-SemiBold.ttf": "f8c4ac5aa4a74e615a13bf3c902506af",
"assets/packages/reg_page/assets/images/plus.png": "09d06816391f21a591fbc6a45713761b",
"assets/packages/reg_page/assets/images/jhg_sign.png": "1da5e91071467df481efc575bdbfcda6",
"assets/packages/reg_page/assets/images/icon_cross.png": "e5a63e73c7543e345b28a755b04dbd44",
"assets/packages/reg_page/assets/images/jhg_background.png": "f6f145eee8df2187375f222c8e312f62",
"assets/packages/reg_page/assets/images/jhg_logo.png": "38409171514ad98704c2d54ff057ea66",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "503d469e12f53050d899c3a1a8686a19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-Regular.ttf": "72a368e7e2bcbd83f75c763aa19d8bf4",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-Bold.ttf": "91e42896d12340dc2039cf7098cf6682",
"assets/packages/flutter_jhg_elements/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-Italic.ttf": "f3045d777d56404bc6cebb77199e360f",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-SemiBold.ttf": "f8c4ac5aa4a74e615a13bf3c902506af",
"assets/packages/flutter_jhg_elements/fonts/alarm_clock.ttf": "2803116d50a5be32e5435aba7d4bb941",
"assets/packages/flutter_jhg_elements/assets/reset.svg": "6117c4dbe4b612a6381f99123730517f",
"assets/packages/flutter_jhg_elements/assets/svg_new_play.svg": "50526ae1f7d617fcb565b5608811bd91",
"assets/packages/flutter_jhg_elements/assets/svg_pause.svg": "d238ff1165d8424694e6b68b1ff58a34",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b2ee2418f519a121141644aeb09b607f",
"assets/fonts/MaterialIcons-Regular.otf": "79d9050fad533ae06abe97374d033b71",
"assets/assets/images/slider.png": "caa6442bcf1a58dd52234e47b9caed7e",
"assets/assets/images/stalk.png": "9c5107d6c47cdba26a80cb05a0d82ea7",
"assets/assets/images/metronome_bottom.png": "eeecf4bc06442c90b297ae024270deab",
"assets/assets/images/arrow_down.png": "2c62ff7cae8e11e80361fcd65537982f",
"assets/assets/images/metronome.png": "228ddd58d4b5ba2590f791adcc94d727",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
