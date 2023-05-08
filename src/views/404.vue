<template>
  <div class="NotFound404">
    <img v-if="underConstruction" src="@/assets/svg/under-construction.svg" />
    <img v-else src="@/assets/svg/404.svg" />
    <div style="max-width: 450px; margin: auto">
      <h3 class="is-size-2 has-text-centered" v-if="underConstruction">
        UNDER CONSTRUCTION
      </h3>
      <h3 class="is-size-3 has-text-centered" v-else>
        Hi, sorry, we never wanted you to see this page, but unfortunately, you
        did.
      </h3>
      <br />
      <br />
      <h3 class="is-size-4 has-text-centered" v-if="!underConstruction">
        Please take a step back and check the URL or use the menu to find your
        ways.
      </h3>
      <br />
      <br />
      <div class="menu" style="width: fit-content; margin: auto !important">
        <ul class="pagination">
          <li class="pagination-previous">
            <router-link to="/">Home</router-link>
          </li>
          <li class="pagination-next">
            <router-link to="/resume">About Emmanuel</router-link>
          </li>
          <li class="pagination-next">
            <router-link to="/lab">My Lab</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import settings from '@/settings.json'

export default {
  name: 'NotFoundPage',
  metaInfo: {
    title: 'Page not found or under construction || Ayotunde Ayoola'
  },
  components: {},
  computed: {
    underConstruction () {
      return settings.underConstruction
    },
    ...mapState(['darkMode'])
  }
}
</script>
<style scoped>
.NotFound404 img {
  max-height: 250px;
  filter: invert(22%) sepia(97%) saturate(2910%) hue-rotate(205deg)
    brightness(90%) contrast(97%);
}
</style>
