<template>
  <section class="youtube">
    <h1 class="header">Youtube Contents</h1>
    <div class="thumbnail-grid">
      <template v-for="(videosPlace) in videos">
        <div v-for="(video, index) in videosPlace" :key="index" class="thumbnail">
          <a :href="`https://www.youtube.com/watch?v=${video.id}`" target="_blank" rel="noopener noreferrer">
            <img :src="video.thumbnail" :alt="video.title">
          </a>
          <div class="thumbnail-title">{{ video.title }}</div>
        </div>
      </template>
      <div class="thumbnail view-more">
        <a :href="getSocial.youtube" class="button">View Youtube Channel</a>
      </div>
    </div>
  </section>
</template>

<script>
import {computed, ref} from "@vue/composition-api";
import youtube from "../../services/youtube";
import { mapGetters } from 'vuex'

export default {
  name: 'YoutubeModule',
  setup (_props, { root }) {
    const darkMode = computed(() => root.$store.state)
    const videos = ref([])
    const numVisible = ref(6) // show 6 videos initially

    youtube.getChannelTopVideos(8).then((response) => {
      console.log({response})
      videos.value = response
    })

    return { videos }
  },
  computed: {
    ...mapGetters('infoCard', [
      'getSocial',
    ])
  },
  methods: {
    loadMore() {

    }
  }
}
</script>
<style lang="scss">
 .youtube {
   margin: 0 auto;
   max-width: 90%;
 }
.thumbnail-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.thumbnail {
  width: 300px;
  height: 250px;
  margin: 10px;

  overflow: hidden;
  white-space: nowrap;
}

.thumbnail img {
  max-width: 100%;
  max-height: 100%;
}

.thumbnail.view-more {
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.thumbnail.view-more a {
  text-decoration: none;
  color: #333;
}
.thumbnail-title {
  text-overflow: ellipsis;
}
.header {
  font-size: 1.5rem;
  font-weight: 700;
  padding: 20px
}
@media (max-width: 900px) {
  .header {
    text-align: center;
  }
}
</style>
