export default {
  namespaced: true,
  state: {
    description: 'passionate about enhancing human potential, helping people and organizations grow, and leaving a lasting positive impact on lives.',
    name: 'I am EmmsDan',
    firstButton: {
      text: 'learn more...',
      url: '/emmauel-daniel-resume.pdf'
    },
    secondButton: {
      text: 'How can I help you?',
      url: 'contact'
    },
    placeholder: '/img/logo.75891cef.png'
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
