const pkg = require('./package')
const nodeExternals = require('webpack-node-externals')

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
    '~/assets/style/app.styl',
    '@mdi/font/css/materialdesignicons.css',
    'material-design-icons-iconfont/dist/material-design-icons.css',
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
    '@/plugins/material-icons',
    '@/plugins/scrollbar'
  ],
  /*vue: {
    config: {
      devtools: true
    }
  },*/
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://127.0.0.1/sistemav/public/api/',
    proxyHeaders: false,
    credentials: false
  },
  /*vuetify: {
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
  },*/
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
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
