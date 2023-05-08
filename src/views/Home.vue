<template>
  <div class="home">
    <br />
    <InfoCard msg="">
      <template>
        <SocialMediaModule />
      </template>
    </InfoCard>
    <YoutubeModule />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoCard from '@module/InfoCard/InfoCard'
import SocialMediaModule from '../modules/SocialMedia/SocialMedia'
import YoutubeModule from "../modules/Youtube/Youtube.vue";

export default {
  metaInfo: {
    title: 'Welcome Ayotunde Ayoola'
  },
  name: 'Home',
  components: {
    YoutubeModule,
    SocialMediaModule,
    InfoCard
  },
  methods: {}
}
</script>
