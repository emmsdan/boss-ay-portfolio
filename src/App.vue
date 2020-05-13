<template>
<div>
  <TopNotification message="Hi, my web app is still in under construction."/>
  <div id="app" :class="darkMode ? 'dark' : 'light'">
    <TheHeader no-shadow/>
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
