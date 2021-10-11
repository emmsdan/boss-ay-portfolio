<template>
  <transition name="fade">
    <div v-if="!closeNotification">
      <div
        class="top-notification"
        :class="{ [variant]: variant, 'position-relative': responsive }"
      >
        <div class="top-message">{{ message }}</div>
        <button
          class="close"
          aria-label="Notification Action button"
          @click="closeNotificationHandler"
        >
          {{ getBtnType ? "&#10005;" : "learn more" }}
        </button>
      </div>
      <br />
      <br />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'TopNotification',
  props: {
    message: String,
    btnType: String,
    variant: String,
    responsive: Boolean,
    fadeOut: {
      default: true,
      type: Boolean
    }
  },
  created () {
    if (this.fadeOut) {
      setTimeout(() => {
        this.closeNotificationHandler()
      }, 9000)
    }
  },
  data () {
    return {
      closeNotification: false
    }
  },
  computed: {
    getBtnType () {
      return !this.btnType || this.btnType === 'close'
    }
  },
  methods: {
    closeNotificationHandler () {
      this.closeNotification = !this.closeNotification
    }
  }
}
</script>
