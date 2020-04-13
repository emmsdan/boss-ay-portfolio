import Vue from 'vue'
import Vuex from 'vuex'

// import modules here
import hello from '@module/HelloWorld/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    hello
  }
})
