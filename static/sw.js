importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04ee37e652d39d8b8240.js",
    "revision": "b17549c7199519cf24d4a1aebd9512be"
  },
  {
    "url": "/_nuxt/44240d3b2dca609c6677.js",
    "revision": "c81c0a1fe13670a3b833dbeb1ff8faf4"
  },
  {
    "url": "/_nuxt/4c446ec45cb5f9adb63c.js",
    "revision": "bfb85cb539496efc37c6e424054c9c1e"
  },
  {
    "url": "/_nuxt/7b54bce2ade33a83472f.js",
    "revision": "eb1eb171d14dbfd01e7f3624a4b97d9e"
  },
  {
    "url": "/_nuxt/8af4b53344cb0cd03d9c.js",
    "revision": "281a08a51763644c34bb47478869ad20"
  },
  {
    "url": "/_nuxt/901fe63239d6221081d9.js",
    "revision": "a6cf59c2fea57ef2c15f1881b437c06d"
  },
  {
    "url": "/_nuxt/e731d20b7b4ddafdfdb1.js",
    "revision": "64b037f59283288df53302dfa447532b"
  },
  {
    "url": "/_nuxt/ffa5e0c64b2907fbb916.js",
    "revision": "b4783e8965cbc989e8adb16ab3cc64ba"
  },
  {
    "url": "/_nuxt/ffe681c4bc9b6d38d746.js",
    "revision": "5bbd056038c2d2f0b4aec16fcc586d20"
  }
], {
  "cacheId": "sistemav",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
