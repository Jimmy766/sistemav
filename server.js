// Require `Nuxt` And `Builder` modules
const { Nuxt, Builder } = require('nuxt')

const NuxtServer = require('nuxt-server')
// Require Nuxt config
const config = require('./nuxt.config.js')

const server = new NuxtServer(Nuxt, Builder, config)
// ---
server.run(function(err, ports) {
  if (err) console.error(err)
  console.log(ports)
})
