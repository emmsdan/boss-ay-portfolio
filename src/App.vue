<template>
  <div>
    <div id="app" :class="darkMode ? 'dark' : 'light'">
      <TopNotification
        message="Hi, my web app is still under construction."
        :variant="!darkMode ? 'dark' : 'light'"
      />
      <TheHeader no-shadow />
      <div>
        <router-view />
      </div>

      <TheFooter />
    </div>
  </div>
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
    TheFooter,
    TheHeader,
    TopNotification
  },
  computed: mapState(['darkMode'])
}
</script>
