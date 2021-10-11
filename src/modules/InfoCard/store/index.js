export default {
  namespaced: true,
  state: {
    description: 'passionate about enhancing human potential...',
    name: 'I am EmmsDan',
    firstButton: {
      text: 'learn more...',
      url: '/resume'
    },
    secondButton: {
      text: 'View Cool Projects',
      url: 'lab'
    },
    placeholder: '/public/img/logo.75891cef.png'
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
