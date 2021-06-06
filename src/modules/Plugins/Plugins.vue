<template>
  <section class="plugins">
    <div class="horizontal">
      <Wakatime />
    </div>
  </section>
</template>

<script>
import Wakatime from './Wakatime/Wakatime'
export default {
  name: 'PluginModule',
  components: { Wakatime },
  data: () => {
    return {
      twitter: 'https://twitter.com/emmsdan',
      linkedIn: 'http://linkedin.com/in/emmsdan/',
      clubhouse: 'https://clubhub.site/@emmsdan',
      instagram: 'https://www.instagram.com/emmsdan/',
      email: 'mailto:danielem@emmsdan.com.ng'
    }
  },
  methods: {}
}
</script>
