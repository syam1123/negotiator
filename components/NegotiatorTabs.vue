<template>
  <section class="navigator-section">
    <div class="container">
      <div class="tabs">
        <div
          class="tab-head"
          :class="{ selected: activeTab === 'employee' }"
          @click.prevent="selectTab('employee')"
        >
          Employee
        </div>
        <div
          class="tab-head"
          :class="{ selected: activeTab === 'employer' }"
          @click.prevent="selectTab('employer')"
        >
          Employer
        </div>
      </div>
      <div
        class="tabs-container"
        :class="{ 'translate-left': activeTab === 'employer' }"
      >
        <div class="each-tab">
          <form @submit.prevent="submitEmployeeSelection">
            <label class="label">Salary expectation</label>
            <div class="input-section">
              <span class="currency">€</span>
              <input
                v-model="employeeExpectation"
                type="number"
                min="1"
                placeholder="Enter expectation"
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div class="each-tab">
          <form @submit.prevent="submitEmployerSelection">
            <label class="label">Salary proposal</label>
            <div class="input-section">
              <span class="currency">€</span>
              <input
                v-model="exployerProposal"
                type="number"
                min="1"
                placeholder="Enter proposal"
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      employeeExpectation: '',
      exployerProposal: '',
      activeTab: 'employee'
    }
  },
  computed: {
    ...mapState('session', ['employeeSelection', 'employerSelection'])
  },
  methods: {
    selectTab(tab = 'employee') {
      this.activeTab = tab
    },
    submitEmployeeSelection() {
      this.setEmployeeSelection(this.employeeExpectation)
      this.employeeExpectation = ''
      if (this.employerSelection) {
        this.validateInputs()
      } else {
        this.selectTab('employer')
      }
    },
    submitEmployerSelection() {
      this.setEmployerSelection(this.exployerProposal)
      this.exployerProposal = ''
      if (this.employeeSelection) {
        this.validateInputs()
      } else {
        this.selectTab('employee')
      }
    },
    validateInputs() {
      let status, heading, content
      const comparedResult =
        parseInt(this.employerSelection) - parseInt(this.employeeSelection)
      if (comparedResult >= 0) {
        status = 'success'
        heading = 'Success!'
        content =
          "Congrats! The proposal is meeting the candidate's expectations"
      } else {
        status = 'danger'
        heading = 'Failure!'
        content =
          "Sorry! The proposal is not meeting the candidate's expectations"
      }
      const messageObject = {
        status,
        message: {
          heading,
          content
        }
      }
      this.showMessage(messageObject)
    },
    ...mapActions('session', ['setEmployeeSelection', 'setEmployerSelection']),
    ...mapActions('flashMessage', ['showMessage'])
  }
}
</script>

<style>
.navigator-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: auto;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 4px;
}
.tabs {
  display: flex;
}
.tab-head {
  flex: 1;
  text-align: center;
  padding: 0.75em 1em;
  background-color: #dcd8d8;
  cursor: pointer;
  transition: background-color linear 0.25s;
}
.tab-head.selected {
  background-color: white;
  font-weight: 600;
}
.tabs-container {
  width: 200%;
  display: flex;
  transition: all linear 0.3s;
}
.tabs-container.translate-left {
  transform: translateX(-50%);
}
.each-tab {
  flex: 1;
  padding: 2em;
}
.each-tab form {
  display: flex;
  flex-direction: column;
}
.label {
  color: #444343;
  margin-bottom: 0.5em;
  font-weight: 500;
}
.input-section {
  position: relative;
  display: flex;
}
input[type='number'] {
  padding: 0.5em 1.35em;
  outline: none;
  border-radius: 2px;
  border: 1px solid #c3c2c2;
  font-size: 1em;
  margin-bottom: 1em;
  flex: 1;
}
.currency {
  position: absolute;
  top: 0.3em;
  left: 7px;
  font-weight: 600;
  font-size: 1.2em;
  color: #555;
}
input[type='submit'] {
  background: #4caf50;
  border: none;
  padding: 0.5em 1em;
  color: white;
  font-size: 1em;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
}
</style>
