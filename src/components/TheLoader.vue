<template>
  <div class="loader-container" v-if="!closeLoader">
    <div class="loader">Loading...</div>
    {{ closeTime() }}
  </div>
</template>
<script>
export default {
  name: 'TheLoader',
  props: {
    timeout: {
      type: String,
      default: '10'
    }
  },
  data () {
    return {
      closeLoader: false
    }
  },
  computed: {},
  methods: {
    closeTime () {
      const time = this.timeout * 1000
      setTimeout(() => {
        this.closeLoader = true
      }, time)
    }
  }
}
</script>
