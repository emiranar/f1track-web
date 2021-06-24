'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bb77460f4cbee3a9ef441e54d213fbea",
".git/config": "78a0fe21a05ada7e781e8bbcfb8409ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "e5bbff7991dea16a82dc44f54878e0b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "643c6a5224b7701ea01dc7e6844be224",
".git/logs/refs/heads/master": "643c6a5224b7701ea01dc7e6844be224",
".git/logs/refs/remotes/origin/master": "5687e07e55877924d340f4d4478ee4a0",
".git/objects/00/156fc52ac61664f7d9a1bbda666505d8268736": "125ce58de11cfd752b2fdc8fc3b54561",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/e4019b952e231509784f5838bf9c2638311507": "329d38440257ac41384a61fa263de2eb",
".git/objects/35/80fdcccd25aef120ad2cafd420c1be1d695429": "dc16b440105168ba9c69e9829e1eb1a2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/5b/75528f1aebdd3fae28cf3177b8dd7ba9c8c35f": "0ea338a8b9f493369678e5d495f98c66",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/92592c7b842810eeea953ff940faed99f0e5a9": "800907f457895d83991f2648c4dcb5bc",
".git/objects/97/2015234afa21439806f0dd8e97f49aa4e012f8": "178c028e1d2294e11ac42b790cb42184",
".git/objects/9d/a5be3a5de5a5eb94025c0bb07a3ba926d8aaef": "01a3bbe42af8bfd90cf8a794be33eba5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/65b60d9a422ea3bda77e8271a9d433d23ece20": "186b2fea66e8cc42e6cd86f872951c3f",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/13f97fc320cc5d112c24b563dd4dcff72c6fcb": "3c563ef596ccf7879316e18b272babc5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b5/0329e828d72d761af8dfc893713bfc3f8c6a6a": "d77b8ebb65fd0f046516551d92f7fb88",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e4/38417c50a82d48f81837b92acf913fa1f8975a": "99cae5cb3acc51e3781b19f7f5b2c283",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/6025631a72de6d6e8e6d42e1176c7521f7a847": "a2a978f2e520f9449e890e9cf5662ba2",
".git/objects/fd/9d71f0f0c8d5c92342f94f84408d61211b7cf1": "d27cafe407505fbcbf3e8b2b8f43ea23",
".git/refs/heads/master": "5570437e43869593c62b2127c6a82169",
".git/refs/remotes/origin/master": "5570437e43869593c62b2127c6a82169",
"assets/AssetManifest.json": "f33d629befd8098fdcf2ab00ca64684f",
"assets/assets/images/Circuits/albert_park.png": "4af7c422e96f3840d53cb8dc3a3880b3",
"assets/assets/images/Circuits/americas.png": "fa0d9ef3742e97cc9e2e02d1df0379eb",
"assets/assets/images/Circuits/bahrain.png": "1d1ad5529981efb373e7b7ee0ffc4dad",
"assets/assets/images/Circuits/BAK.png": "6f3cb9ba6a2fb2105d1092e4c618382c",
"assets/assets/images/Circuits/catalunya.png": "cd49dcf68b55399a2091d727ffdecb90",
"assets/assets/images/Circuits/hungaroring.png": "55f72b1517695027b9186124d8e76f91",
"assets/assets/images/Circuits/imola.png": "55a8bf3b515ba8383a5c2084e7f34bf5",
"assets/assets/images/Circuits/interlagos.png": "ceab42bc24eb22b3b49136ca16db51bc",
"assets/assets/images/Circuits/jeddah.png": "8712ad746263a10cb209c2700fb0766f",
"assets/assets/images/Circuits/marina_bay.png": "df8458ee28cba81a59e57b26ce03f594",
"assets/assets/images/Circuits/monaco.png": "2cd5eca5d652402a548c5a2774d7a50f",
"assets/assets/images/Circuits/monza.png": "077af0905d009fd8a8d847b163853d87",
"assets/assets/images/Circuits/portimao.png": "c63fb3a9d7d384c3c8f14cfe1877778b",
"assets/assets/images/Circuits/red_bull_ring.png": "585c8e895e64592827fa7c4a8f07cd6a",
"assets/assets/images/Circuits/ricard.png": "b51572de0ad4eefdcac28f084d159247",
"assets/assets/images/Circuits/rodriguez.png": "0497eec031365fdaeecc5e5721e619c8",
"assets/assets/images/Circuits/silverstone.png": "27df614215d103e4248f0335d8b8158d",
"assets/assets/images/Circuits/sochi.png": "4488e1c762cc5a2a967683e6ddddfa81",
"assets/assets/images/Circuits/spa.png": "5f83d4f9e2d3646df6623ee33c628861",
"assets/assets/images/Circuits/suzuka.png": "9e08529a45c5d5654a513ffb6ef2386b",
"assets/assets/images/Circuits/yas_marina.png": "f54788c558342e9704ae5283c98bb359",
"assets/assets/images/Circuits/zandvoort.png": "d25d4e52b7ad303d7a43f5832459237c",
"assets/assets/images/news.jpg": "b015096295419293aaa3d645c3f9eaf8",
"assets/assets/images/Pilots/ALO.png": "642bb5b8092fc9d02c4654ad4be5f0f2",
"assets/assets/images/Pilots/BOT.png": "602aebc3f88a627b8723b67e436c11b6",
"assets/assets/images/Pilots/GAS.png": "f4dff23c6f54d9cc4a50ad1f334b6420",
"assets/assets/images/Pilots/GIO.png": "5870920cf3a305e232d8a790b4c59593",
"assets/assets/images/Pilots/HAM.png": "a7c470d143e9f757b54e1a26f53478e4",
"assets/assets/images/Pilots/LAT.png": "36d184470d2fc8d6905b99ca0ef744e6",
"assets/assets/images/Pilots/LEC.png": "d2f0c0fa2027c32ee8ddc974c3f8d6c7",
"assets/assets/images/Pilots/MAZ.png": "fe575628af50b9e502f1f2163e2bf66b",
"assets/assets/images/Pilots/MSC.png": "124440f2d56b83f0c1a0663ce221e158",
"assets/assets/images/Pilots/NOR.png": "a57b5836bd23089b68b5778f5b4be34e",
"assets/assets/images/Pilots/OCO.png": "8ddc35732a26a0533c1e2541b7475db8",
"assets/assets/images/Pilots/PER.png": "43684363c7b4cdf93744fdf847457e6d",
"assets/assets/images/Pilots/RAI.png": "55d264cfd5d3adcf02671892db3f1542",
"assets/assets/images/Pilots/RIC.png": "a340f049d971dc8f4f7750b27a209d24",
"assets/assets/images/Pilots/RUS.png": "7fd5e3e70fcec526b1628cfb6a3748ad",
"assets/assets/images/Pilots/SAI.png": "e3181e1911cbb6058cb16e5961cad995",
"assets/assets/images/Pilots/STR.png": "effba0b7519348eb72e228ea892c8707",
"assets/assets/images/Pilots/TSU.png": "0159908c843ad21656e88bffd78fc5a4",
"assets/assets/images/Pilots/VER.png": "459958b567e44df8d2118eb3eca66bc1",
"assets/assets/images/Pilots/VET.png": "74cd38da78ff966bbf444dce1bf67fef",
"assets/assets/images/Teams/alfa.png": "6ba6efa41c1b3a54055c53fbc458d820",
"assets/assets/images/Teams/alphatauri.png": "f1869df9d0488fe5f8bbec28ac415e61",
"assets/assets/images/Teams/alpine.png": "6ef77ac36eb59607f239ba142023e1f5",
"assets/assets/images/Teams/aston_martin.png": "a20c134a9e5fdfc3f87846234bef6598",
"assets/assets/images/Teams/ferrari.png": "0e339c477b44a0a77b9c6c14ae8b4b1c",
"assets/assets/images/Teams/haas.png": "fc22ff7cf5bce64731267ad0ad17c436",
"assets/assets/images/Teams/mclaren.png": "2e0458b0b81e5d1ebfd7dc06820c3d92",
"assets/assets/images/Teams/mercedes.png": "5bf10c8d4e825c1994f3b14b727076ea",
"assets/assets/images/Teams/red_bull.png": "fe86fcb75b6728f419a55acf01a217be",
"assets/assets/images/Teams/williams.png": "4ee45388401470d319a75e195525be23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b89a755ff95282823011d546da15c57b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1dca8ecf2bbc810c54c8354afb028d51",
"/": "1dca8ecf2bbc810c54c8354afb028d51",
"main.dart.js": "b09d5df7e613e47f7e7345954a2520f2",
"manifest.json": "625425794b1bccec519ec6725eb58f16",
"version.json": "d661ed8abc27486b7cf9f2a2930c0c3a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
