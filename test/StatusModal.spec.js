import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import StatusModal from '@/components/StatusModal.vue'

const mockActions = {
  hideStatusModal: jest.fn()
}
const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,

  modules: {
    session: {
      namespaced: true,
      state: {},
      actions: () => {}
    },
    statusModal: {
      namespaced: true,
      state: {
        message: {
          heading: 'Success!',
          content: 'Test Message'
        },
        isVisible: true,
        status: 'success',
        weather: {
          temperature: 20
        }
      },
      actions: mockActions
    }
  }
})

describe('StatusModal:', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(StatusModal, {
      store,
      localVue
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('dispatch hideStatusModal on clicking button', () => {
    const wrapper = shallowMount(StatusModal, {
      store,
      localVue
    })
    wrapper.find('.close-button').trigger('click')
    expect(mockActions.hideStatusModal.mock.calls).toHaveLength(1)
  })

  test('heading renders correctly', () => {
    const wrapper = shallowMount(StatusModal, {
      store,
      localVue
    })
    expect(wrapper.find('h2.modal-heading').text()).toBe('Success!')
  })

  test('the classes updates correctly for button and heading', () => {
    const wrapper = shallowMount(StatusModal, {
      store,
      localVue
    })
    expect(wrapper.find('h2.success')).toBeTruthy()
    expect(wrapper.find('button.success')).toBeTruthy()
  })
})
