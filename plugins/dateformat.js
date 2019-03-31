import Vue from 'vue'
const moment = require('moment')
require('moment/locale/es')

Vue.use(require('vue-moment'), {
  moment
})

console.log(Vue.moment().locale()) // es
