const nodeExternals = require('webpack-node-externals')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  css: [
    '@mdi/font/css/materialdesignicons.css',
    
    '~/assets/style/app.styl',
    '@/assets/style/scrollbar.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/usb',
    '@/plugins/vuetify',
    
    '@/plugins/scrollbar',
    '@/plugins/codigo-control',
    '@/plugins/globales',
    '@/plugins/numeros',
    '@/plugins/qrcode'
  ],
  /* vue: {
    config: {
      devtools: true
    }
  }, */
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/axios',
    ['@nuxtjs/moment', ['es']],
	['nuxt-material-design-icons']
  ],
  workbox: {
    dev: true,
    debug: true
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://localhost/sistemav/public/api/',
    proxyHeaders: false,
    credentials: false
  },
  /* vuetify: {
    // Vuetify options
    theme: {
      primary: '#f44336',
      secondary: '#e57373',
      accent: '#9c27b0',
      error: '#f44336',
      warning: '#ffeb3b',
      info: '#2196f3',
      success: '#4caf50'
    }
  }, */
  /*
   ** Build configuration
   */
  cert: {
    mode: 'http', // HTTP (default), HTTPS, HTTP_HTTPS
    setup: {
      http: {
        port: 8080 // default
      },
      https: {
        port: 8443, // default
        path: {
          key: './path/to/file/example.key', // Path to the certificate key
          cert: './path/to/file/example.crt', // Path to the certificate
          ca: ['./path/to/file/example.txt'] // Path to the certificate
        },
        handshakeTimeout: 120,
        requestCert: false,
        rejectUnauthorized: true
      }
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-barcode-scanner', 'dateformat'],
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
      // else {
      //   config.externals = [
      //     nodeExternals({
      //       whitelist: [/\.(?!(?:js|json)$).{1,5}$/i, /^vue-scroll-bar/]
      //     })
      //   ]
      // }
    }
  }
}
