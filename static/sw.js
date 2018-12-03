importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22ff71e18b0aed568a67.js",
    "revision": "93301f55cf9f1d3d384982260cae4989"
  },
  {
    "url": "/_nuxt/25478b3dcc588bfc20b2.js",
    "revision": "3c9e52145bdc6a73b1b2ba328793fba4"
  },
  {
    "url": "/_nuxt/886c939c7e4c770156a9.js",
    "revision": "2535000fa6d95ba96d322d5a01c59d50"
  },
  {
    "url": "/_nuxt/d7b08dc8efb4218c77df.js",
    "revision": "7b55800818ed69850698f4e6e37642d8"
  },
  {
    "url": "/_nuxt/dc7b961a6a4e3d8b020e.js",
    "revision": "e36b1a0a9e63a8a2ac2d418f62f60cf6"
  },
  {
    "url": "/_nuxt/e81e0b19b07436c3d9c5.js",
    "revision": "26405abf5a93760d9405744c7af5b243"
  }
], {
  "cacheId": "practica2",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





