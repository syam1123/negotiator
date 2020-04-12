<template>
  <section class="modal-container">
    <div v-if="isVisible" class="modal-overlay">
      <div v-if="message" class="modal-content">
        <h2 class="modal-heading" :class="status">{{ message.heading }}</h2>
        <p>{{ message.content }}</p>
        <div class="sec-details">
          <p>
            Employee expectation: <b>€{{ employeeSelection }}</b>
          </p>
          <p>
            Employer proposal: <b>€{{ employerSelection }}</b>
          </p>
        </div>
        <button
          :class="status"
          class="close-button"
          @click.prevent="hideFlashMessage"
        >
          Close
        </button>
        <div class="weather-details">
          <p>City: <strong>London</strong></p>
          <p>
            Temperature:
            <strong v-if="temperature">{{ temperature }}&deg;C</strong>
            <span v-else>N/A</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    temperature() {
      if (!this.weather || !this.weather.temp) return null
      return (this.weather.temp - 275).toFixed(2)
    },
    ...mapState('session', ['employeeSelection', 'employerSelection']),
    ...mapState('flashMessage', ['isVisible', 'message', 'status', 'weather'])
  },
  methods: {
    ...mapActions('flashMessage', ['hideFlashMessage'])
  }
}
</script>

<style>
.modal-container {
  position: relative;
}
.modal-overlay {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: #00000061;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444;
}
.modal-content {
  background: white;
  padding: 2em;
  width: 95%;
  max-width: 500px;
  border-radius: 5px;
}
.sec-details {
  margin-top: 1em;
}
.modal-heading {
  margin-bottom: 0.5em;
}
.modal-heading.success {
  color: #4caf50;
}
.modal-heading.danger {
  color: #f44336;
}
.modal-heading.warning {
  color: orange;
}
.close-button {
  margin-top: 2em;
  background: orange;
  color: white;
  border: none;
  outline: none;
  padding: 0.5em 3em;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}
.close-button.success {
  background: #4caf50;
}
.close-button.danger {
  background: #f44336;
}
.weather-details {
  padding-top: 1em;
  margin-top: 1em;
  border-top: 1px solid #dedede;
  font-size: 14px;
}
</style>
