<template>
  <div class="footer">
    <div class="place-holder">I am the son of Jesus</div>
    <div class="navbar">
      <div v-for="(menu, index) in menus" :key="index">
        <router-link class="navbar-item" :to="menu.url">
          {{ menu.title }}
        </router-link>
      </div>
      <router-link class="navbar-item active" to="/about">
        &copy; {{ copyright }} powered by {{ author }}
      </router-link>
    </div>
  </div>
</template>
<script>
import settings from '@/settings'
const { SITE_MAP, TERMS_AND_CONDITIONS } = settings.route

export default {
  name: 'Footer',
  props: {},
  data () {
    return {
      copyright: new Date().getFullYear(),
      menus: [
        {
          url: SITE_MAP,
          title: 'site map'
        },
        {
          url: TERMS_AND_CONDITIONS,
          title: 'terms'
        }
      ],
      author: 'emmsdan'
    }
  },
  computed: {},
  methods: {}
}
</script>
