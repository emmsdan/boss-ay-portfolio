<template>
  <div class="home">
    <br />
    <InfoCard msg="">
      <template>
        <SocialMediaModule />
      </template>
    </InfoCard>
    <PluginModule />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoCard from '@module/InfoCard/InfoCard'
import SocialMediaModule from '../modules/SocialMedia/SocialMedia'
import PluginModule from '../modules/Plugins/Plugins'

export default {
  metaInfo: {
    title: 'Welcome Ayotunde Ayoola'
  },
  name: 'Home',
  components: {
    PluginModule,
    SocialMediaModule,
    InfoCard
  },
  methods: {}
}
</script>
