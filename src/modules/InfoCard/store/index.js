export default {
  namespaced: true,
  state: {
    description: ' Tech Evangelist | Solution Architect | Microsoft MVP',
    name: 'I am Ayotunde',
    firstButton: {
      text: 'learn more...',
      url: '/resume'
    },
    secondButton: {
      text: 'View Cool Projects',
      url: 'lab'
    },
    placeholder: '/AY.png'
  },
  mutations: {
    update (state, payload) {
      state = payload
    }
  },
  actions: {},
  getters: {
    getDescription (state) {
      return state.description
    },
    getName (state) {
      return state.name
    },
    getFirstButtonText (state) {
      return state.firstButton.text
    },
    getFirstButtonUrl (state) {
      return state.firstButton.url
    },
    getSecondButtonText (state) {
      return state.secondButton.text
    },
    getSecondButtonUrl (state) {
      return state.secondButton.url
    },
    getPlaceholderImage (state) {
      return state.placeholder
    }
  }
}
