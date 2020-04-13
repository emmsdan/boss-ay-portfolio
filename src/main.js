import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './base/router'
import store from './base/store'

// Vue.config.productionTip = false
Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
