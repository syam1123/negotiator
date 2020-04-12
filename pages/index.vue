<template>
  <div>
    <FlashMessage />
    <NegotiatorTabs :on-submit="onSubmit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FlashMessage from '~/components/FlashMessage'
import NegotiatorTabs from '~/components/NegotiatorTabs'
export default {
  components: {
    FlashMessage,
    NegotiatorTabs
  },
  data() {
    return {
      isMessageVisible: false,
      message: '',
      messageStatus: 'warning'
    }
  },
  beforeMount() {
    this.checkCurrentTemperature()
  },
  methods: {
    onSubmit() {},
    toggleAlert() {
      this.isMessageVisible = !this.isMessageVisible
    },
    ...mapActions('flashMessage', ['checkCurrentTemperature'])
  }
}
</script>
