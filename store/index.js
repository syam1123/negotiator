import Vuex from 'vuex'

import flashMessage from './modules/flashMessage'
import session from './modules/session'

const store = () =>
  new Vuex.Store({
    state: () => ({}),
    modules: {
      flashMessage,
      session
    },
    strict: process.env.NODE_ENV !== 'production'
  })

export default store
