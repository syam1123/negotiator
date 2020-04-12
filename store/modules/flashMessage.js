export default {
  namespaced: true,
  state: {
    message: null,
    isVisible: false,
    status: '',
    weather: null
  },
  actions: {
    showMessage({ commit }, messageObj = {}) {
      commit('SET_NEW_MESSAGE', messageObj)
    },
    hideFlashMessage({ commit }) {
      commit('RESET_MESAGE')
      commit('session/RESET_SELECTIONS', null, { root: true })
    },
    async checkCurrentTemperature({ commit }) {
      await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=London&appid=22d64ae0e66c1c3b7aaffcd686173a9a'
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          commit('UPDATE_WEATHER_DATA', data.main)
        })
    }
  },
  mutations: {
    RESET_MESAGE(state) {
      state.isVisible = !state.isVisible
      state.message = ''
    },
    SET_NEW_MESSAGE(state, messageObj = {}) {
      state.message = messageObj.message
      state.isVisible = true
      state.status = messageObj.status || 'warning'
    },
    UPDATE_WEATHER_DATA(state, weatherReport = {}) {
      state.weather = weatherReport
    }
  }
}
