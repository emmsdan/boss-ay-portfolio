<template>
<div>
  <TopNotification message="Hi, my web app is still in under construction."/>
  <div id="app" :class="darkMode ? 'dark' : 'light'">
    <TheHeader no-shadow/>
    <router-view/>

    <TheFooter />
  </div></div>
</template>

<script>
// @ is an alias to /src
import TheFooter from '@component/TheFooter'
import TheHeader from '@component/TheHeader'
import TopNotification from '@component/TopNotification'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    TheFooter, TheHeader, TopNotification
  },
  computed: mapState(['darkMode'])
}
</script>
