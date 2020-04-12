export default {
  namespaced: true,
  state: {
    employeeSelection: '',
    employerSelection: ''
  },
  actions: {
    setEmployeeSelection({ commit }, expectation) {
      commit('SET_EMPLOYEE_SELECTION', expectation)
    },
    hideFlashMessage({ commit }) {
      commit('RESET_MESAGE')
    }
  },
  mutations: {
    SET_EMPLOYEE_SELECTION(state, expectation = 0) {
      state.employeeSelection = expectation
    },
    SET_EMPLOYER_SELECTION(state, proposal = 0) {
      state.employerSelection = proposal
    },
    RESET_SELECTIONS(state) {
      state.employeeSelection = ''
      state.employerSelection = ''
    }
  }
}
