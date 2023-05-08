export default {
  namespaced: true,
  state: {
    description: ' Tech Evangelist | Solution Architect | Microsoft MVP - Business Applications',
    name: 'I am Ayotunde',
    firstButton: {
      text: 'learn more...',
      url: '/resume'
    },
    secondButton: {
      text: 'read my blog posts',
      url: 'https://stringifyts.com/blog/'
    },
    placeholder: '/AY.png',
    fullName: 'Ayotunde Ayoola',
    twitter: 'https://twitter.com/Official___AY',
    linkedIn: 'https://www.linkedin.com/in/ayotunde-ayoola-27708a89/',
    github: 'https://github.com/officialAY',
    instagram: 'https://www.instagram.com/official__ay/',
    facebook: 'https://www.facebook.com/Awhy101',
    youtube: 'https://www.youtube.com/@ayotundeayoola',
    blog: 'https://stringifyts.com/blog/'
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
    },
    getSocial (state) {
      return state
    }
  }
}
