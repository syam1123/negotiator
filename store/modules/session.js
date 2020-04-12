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
    setEmployerSelection({ commit }, proposal) {
      commit('SET_EMPLOYER_SELECTION', proposal)
    }
  },
  mutations: {
    SET_EMPLOYEE_SELECTION(state, expectation = 0) {
      state.employeeSelection = parseInt(expectation)
    },
    SET_EMPLOYER_SELECTION(state, proposal = 0) {
      state.employerSelection = parseInt(proposal)
    },
    RESET_SELECTIONS(state) {
      state.employeeSelection = 0
      state.employerSelection = 0
    }
  }
}
