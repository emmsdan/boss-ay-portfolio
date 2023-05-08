<template>
  <section class="infocard">
    <div class="picture">
      <img :src="getPlaceholderImage" />
    </div>
    <div class="info">
      <h1>{{ getName }}</h1>
      <h2>{{ getDescription }}</h2>
      <div>
        <router-link :to="getFirstButtonUrl">
          <button>{{ getFirstButtonText }}</button>
        </router-link>
        <a v-if="getSecondButtonText" target="_blank" :href="getSecondButtonUrl">
          <button class="stack">{{ getSecondButtonText }}</button>
        </a>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'InfoCardModule',
  computed: {
    ...mapGetters('infoCard', [
      'getPlaceholderImage',
      'getSecondButtonUrl',
      'getSecondButtonText',
      'getFirstButtonText',
      'getFirstButtonUrl',
      'getDescription',
      'getName'
    ])
  },
  methods: {}
}
</script>
