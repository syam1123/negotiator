<template>
  <div></div>
</template>

<script>
export default {
  props: {
    status: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      },
      default: 'warning'
    },
    message: {
      type: String,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true
    },
    toggle: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
