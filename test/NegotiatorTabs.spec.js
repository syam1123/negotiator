import { mount } from '@vue/test-utils'
import NegotiatorTabs from '@/components/NegotiatorTabs.vue'

describe('NegotiatorTabs', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NegotiatorTabs)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
