<template>
  <div id="app" :class="darkMode ? 'dark' : 'light'">
    <TheHeader no-shadow no-logo/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <InfoCard />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheFooter from '@component/TheFooter'
import TheHeader from '@component/TheHeader'
import InfoCard from '@module/InfoCard/InfoCard'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TheFooter, TheHeader, InfoCard
  },
  computed: mapState(['darkMode'])
}
</script>
