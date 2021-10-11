import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import TheFooter from '../TheFooter'

let localVue = createLocalVue()

localVue.use(VueRouter)

describe('TheFooter.vue', () => {
  afterAll(() => {
    localVue = null
  })

  // it('should render component with out changes', () => {
  //   const wrapper = shallowMount(TheFooter, { store: localStore, localVue })
  //   expect(wrapper).toMatchSnapshot()
  // })
  it('render curves', () => {
    const placeholder = 'I am the son of Jesus'
    const wrapper = shallowMount(TheFooter, { localVue })
    const overlay = wrapper.get('div.place-holder')
    expect(overlay.text()).toBe(placeholder)
  })

  it('render copyright information', () => {
    const wrapper = shallowMount(TheFooter, {
      data: () => {
        return {
          copyright: 2021,
          author: 'emmsdan'
        }
      },
      localVue
    })
    const copyright = wrapper.get('.navbar-item.active')
    const resp = '© 2021 powered by emmsdan'
    expect(copyright.text()).toBe(resp)
  })

  it('render placeholder image', () => {
    const wrapper = shallowMount(TheFooter, { localVue })
    const image = wrapper.get('.place-holder')

    expect(image).toBeTruthy()
  })
  // it('render first and second button', () => {
  //   const wrapper = shallowMount(TheFooter, { store: localStore, localVue })
  //   const button1 = wrapper.findAll('button').at(0)
  //   const button2 = wrapper.findAll('button').at(1)
  //   expect(button1.text()).toBe(getters.getFirstButtonText())
  //   expect(button2.text()).toBe(getters.getSecondButtonText())
  // })
  //
  // it('should not render second button', () => {
  //   const wrapper = shallowMount(TheFooter, {
  //     store: localStore2, localVue
  //   })
  //   expect(wrapper.isVisible()).toBe(true)
  //   const button = wrapper.find('button.stack').exists()
  //   expect(button).toBe(false)
  // })
})
