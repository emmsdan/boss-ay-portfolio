<template>
  <div class="home">
    <InfoCard msg="">
      <template>
        <SocialMediaModule />
      </template>
    </InfoCard>
    <PluginModule />
    <FetchPortfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoCard from '@module/InfoCard/InfoCard'
import FetchPortfolio from '@module/FetchPortfolio/FetchPortfolio'
import SocialMediaModule from '../modules/SocialMedia/SocialMedia'
import PluginModule from '../modules/Plugins/Plugins'

export default {
  name: 'Home',
  components: {
    PluginModule,
    SocialMediaModule,
    InfoCard,
    FetchPortfolio
  },
  methods: {
  }
}
</script>
