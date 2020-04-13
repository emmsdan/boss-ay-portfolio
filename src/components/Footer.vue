<template>
  <div class="footer">
    <div class="place-holder"></div>
      <div class="navbar">
        <div
          v-for="(menu, index) in menus"
          :key="index"
          >
          <a
            class="navbar-item"
            :href="menu.url"
            > {{ menu.title }} </a>
        </div>
        <a class="navbar-item active">
          &copy; {{ copyright }} powered by emmsdan
        </a>
      </div>
  </div>
</template>
<script>
import settings from '@settings'
const { SITE_MAP, TERMS_AND_CONDITIONS } = settings.route

export default {
  name: 'Footer',
  props: {
  },
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
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>
