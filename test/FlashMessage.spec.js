import { mount } from '@vue/test-utils'
import FlashMessage from '@/components/FlashMessage.vue'

describe('FlashMessage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FlashMessage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
