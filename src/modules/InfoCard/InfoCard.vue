<template>
  <section class="infocard">
    <div class="info">
      <h1> {{ getName }} </h1>
      <h2> {{ getDescription }} </h2>
      <div>
        <router-link :to="getFirstButtonUrl">
          <button> {{ getFirstButtonText }}</button>
        </router-link>
        <router-link  v-if="getSecondButtonText" :to="getSecondButtonUrl">
          <button class="stack"> {{ getSecondButtonText }} </button>
        </router-link>
      </div>
    </div>
    <div class="picture">
      <img :src="getPlaceholderImage" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoCardModule',
  computed: {
    ...mapGetters('infoCard', ['getPlaceholderImage', 'getSecondButtonUrl', 'getSecondButtonText', 'getFirstButtonText', 'getFirstButtonUrl', 'getDescription', 'getName'])
  },
  methods: {}
}
</script>
