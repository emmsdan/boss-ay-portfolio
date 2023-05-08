<template>
  <section class="plugins">
    <div class="horizontal">
      <SkillSet />
    </div>
  </section>
</template>

<script>
import SkillSet from './SkillSets/SkillSet'
export default {
  name: 'PluginModule',
  components: { SkillSet },
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
