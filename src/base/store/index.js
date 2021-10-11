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
  getters: {
    getDarkMode: (state) => {
      return state.darkMode
    }
  },
  mutations: {
    toggleState: (state, stateName) => {
      state[stateName] = !state[stateName]
      if (stateName === 'darkMode') {
        localStorage.setItem('darkMode', !state[stateName])
        // state.darkMode = !state.darkMode
        // return
      }
    }
  },
  modules: {
    infoCard
  }
})
