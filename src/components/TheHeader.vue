<template>
  <section>
    <header :class="noShadow && 'is-shadowless'">
      <div class="logo">
        <img src="@/assets/logo.png" :class="noLogo && 'is-invisible'" />
      </div>
      <div class="menu-box">
        <a role="button" :class="'navbar-burger burger ' + (showMenu && ' is-active')" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="toggleState(2)" v-if="!showMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div :class="'navbar-menu '+ (showMenu && ' is-active')">
          <div class="navbar-end">
            <a :href="route.EMMSDAN.CV" class="flex">
              <img src="@/assets/svg/cv.svg" />
            </a>
            <a v-if="isLoggedIn" key="user-based-url" :href="route.INDEX">
              <img src="@/assets/svg/dashboard.svg" />
            </a>
            <a v-else key="user-based-url" :href="route.INDEX">
              <img src="@/assets/svg/book.svg" />
            </a>

            <a :href="route.EXPERIMENT">
              <img src="@/assets/svg/lab.svg" />
            </a>
            <!-- <a :href="route.POSTS">
              <img src="@/assets/svg/book.svg" />
            </a>
            <a :href="route.VIDEOS">
              <img src="@/assets/svg/play.svg" />
            </a>
            <a :href="route.UPLOAD">
              <img src="@/assets/svg/upload.svg" />
            </a> -->
            <a :href="route.PROFILE">
              <img src="@/assets/svg/user.svg" />
            </a>

            <a href="#mode" @click="toggleState(0)">
              <img v-if="this.$store.state.darkMode" key="toggle-dark-more" src="@/assets/svg/brightness-off.svg" />
              <img v-else key="toggle-dark-more" src="@/assets/svg/brightness-on.svg"/>
            </a>
            <a  href="#" class="close" @click="toggleState(2)" v-if="showMenu">
              <img src="@/assets/svg/close.svg" />
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="header-bar"></div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import settings from '@settings'
export default {
  name: 'Header',
  props: {
    noShadow: {
      type: Boolean,
      default: false
    },
    noLogo: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      route: { ...settings.route, ...settings.route.DASHBOARD },
      states: ['darkMode', 'isLoggedIn', 'showMenu']
    }
  },
  methods: {
    toggleState: function (value) {
      this.$store.commit('toggleState', this.states[value])
    }
  },
  computed: {
    ...mapState(['darkMode', 'isLoggedIn', 'showMenu'])
  }
}
</script>
