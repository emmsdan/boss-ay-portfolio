export const state = {
  description: 'some-description',
  name: 'app name',
  firstButton: {
    text: 'text-content',
    url: '/text-content-url'
  },
  secondButton: {
    text: 'another-text-content',
    url: '/another-text-content-url'
  },
  placeholder: '/a-lovely-image.png'
}
export const getters = {
  getPlaceholderImage () {
    return state.placeholder
  },
  getName () {
    return state.name
  },
  getDescription () {
    return state.description
  },
  getFirstButtonUrl () {
    return state.firstButton.text
  },
  getFirstButtonText () {
    return state.firstButton.url
  },
  getSecondButtonText () {
    return state.secondButton.text
  },
  getSecondButtonUrl () {
    return state.secondButton.url
  }
}
export const noSecondButton = {
  modules: {
    infoCard: {
      namespaced: true,
      state,
      getters: {
        ...getters,

        getSecondButtonText () {
          return null
        }
      }
    }
  }
}
export default {
  modules: {
    infoCard: {
      namespaced: true,
      state,
      getters
    }
  }
}
