import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './base/router'
import store from './base/store'
import axios from 'axios'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/regular.js'
import '@style'

import Swal from 'sweetalert2'
import moment from 'moment'
import VueMoment from 'vue-moment'

import {
  ValidationObserver,
  ValidationProvider,
  extend
} from 'vee-validate'

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
})

window.Swal = Swal
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})

window.Toast = Toast
const st = store.state.darkMode ? 'store.state' : 'store.state.nu'

window.fetch = axios.create({
  baseURL: process.env.VUE_APP_BLOG_URL || 'http://api.emmsdan.com.ng',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'xapp-policy-id': 'EmmsDan Bear:: ' + st + '-QoD7u0',
    authorization: process.env.VUE_APP_AUTHORIZATION
  }
})

Vue.prototype.$http = window.fetch
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common.Authorization = token
}
Vue.use(VueMoment, { moment })

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

// Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
