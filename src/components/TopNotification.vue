<template>
<div v-if="!closeNotification">
  <div :class="'top-notification ' + variant">
    <div class="top-message">{{message}}</div>
    <button class="close" aria-label="Notification Action button" @click="closeNotificationHandler"> {{getBtnType ? '&#10005;' : 'learn more'}}</button>
  </div>
  <br />
</div>
</template>
<script>

export default {
  name: 'TopNotification',
  props: {
    message: String,
    btnType: String,
    variant: String
  },
  data () {
    return {
      closeNotification: false
    }
  },
  computed: {
    getBtnType () {
      return (!this.btnType || this.btnType === 'close')
    }
  },
  methods: {
    closeNotificationHandler () {
      this.closeNotification = !this.closeNotification
    }
  }
}
</script>
