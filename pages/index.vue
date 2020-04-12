<template>
  <div>
    <StatusModal />
    <NegotiatorTabs />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import StatusModal from '~/components/StatusModal'
import NegotiatorTabs from '~/components/NegotiatorTabs'
export default {
  components: {
    StatusModal,
    NegotiatorTabs
  },
  beforeMount() {
    // get the current temperature details of London
    this.checkCurrentTemperature()
  },
  methods: {
    ...mapActions('statusModal', ['checkCurrentTemperature'])
  }
}
</script>
