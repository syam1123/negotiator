import Vuex from 'vuex'

import statusModal from './modules/statusModal'
import session from './modules/session'

const store = () =>
  new Vuex.Store({
    state: () => ({}),
    modules: {
      statusModal,
      session
    },
    strict: process.env.NODE_ENV !== 'production'
  })

export default store
