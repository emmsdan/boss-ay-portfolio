import Vue from 'vue'
import Vuex from 'vuex'

// import modules here
import infoCard from '@module/InfoCard/store'

Vue.use(Vuex)

export default new Vuex.Store({
  namespace: true,
  state: {
    darkMode: false,
    isLoggedIn: false,
    showMenu: false
  },
  mutations: {
    toggleState: (state, stateName) => {
      state[stateName] = !state[stateName]
    }
  },
  modules: {
    infoCard
  }
})
