import Vue from 'vue'
import Vuex from 'vuex'

// import modules here
import infoCard from '@module/InfoCard/store'

Vue.use(Vuex)

const darkMode = localStorage.getItem('darkMode') !== 'false'
export default new Vuex.Store({
  namespace: true,
  state: {
    darkMode: !darkMode,
    isLoggedIn: false,
    showMenu: false
  },
  mutations: {
    toggleState: (state, stateName) => {
      state[stateName] = !state[stateName]
      if (stateName === 'darkMode') {
        localStorage.setItem('darkMode', !state[stateName])
      }
    }
  },
  modules: {
    infoCard
  }
})
