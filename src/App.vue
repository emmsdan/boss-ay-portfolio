<template>
<div>
  <TopNotification message="Hi, my web app is still in under construction."/>
  <div id="app" :class="darkMode ? 'dark' : 'light'">
    <TheHeader no-shadow no-logo/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <router-view/>
    <InfoCard style="display: none"/>
    <TheFooter />
  </div></div>

</template>

<script>
// @ is an alias to /src
import TheFooter from '@component/TheFooter'
import TheHeader from '@component/TheHeader'
import TopNotification from '@component/TopNotification'
import InfoCard from '@module/InfoCard/InfoCard'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TheFooter, TheHeader, InfoCard, TopNotification
  },
  computed: mapState(['darkMode'])

}
</script>
