import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import InfoCard from '../InfoCard'
import store, { getters, noSecondButton } from './mockDate'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)
describe('Plugins.vue', () => {
  let localStore, localStore2

  afterAll(() => {
    localStore = localStore2 = null
  })
  beforeEach(() => {
    localStore = new Vuex.Store({
      ...store
    })
    localStore2 = new Vuex.Store({
      ...noSecondButton
    })
  })

  it('should render component with out changes', () => {
    const wrapper = shallowMount(InfoCard, { store: localStore, localVue })
    expect(wrapper).toMatchSnapshot()
  })
  it('render heading', () => {
    const wrapper = shallowMount(InfoCard, { store: localStore, localVue })
    const h1 = wrapper.get('h1')
    expect(h1.text()).toBe(getters.getName())
  })
  it('render description text', () => {
    const wrapper = shallowMount(InfoCard, { store: localStore, localVue })
    const h2 = wrapper.get('h2')
    expect(h2.text()).toBe(getters.getDescription())
  })
  it('render placeholder image', () => {
    const wrapper = shallowMount(InfoCard, { store: localStore, localVue })
    const image = wrapper.get('img')

    expect(image).toBeTruthy()
  })
  it('render first and second button', () => {
    const wrapper = shallowMount(InfoCard, { store: localStore, localVue })
    const button1 = wrapper.findAll('button').at(0)
    const button2 = wrapper.findAll('button').at(1)
    expect(button1.text()).toBe(getters.getFirstButtonText())
    expect(button2.text()).toBe(getters.getSecondButtonText())
  })

  it('should not render second button', () => {
    const wrapper = shallowMount(InfoCard, {
      store: localStore2,
      localVue
    })
    expect(wrapper.isVisible()).toBe(true)
    const button = wrapper.find('button.stack').exists()
    expect(button).toBe(false)
  })
})
