<template>
  <div>
    <h3 class="is-size-3" v-if="!hideTitle">
      Projects/Apps
      <router-link to="/lab">
        <button class="cursor button">View all projects</button>
      </router-link>
    </h3>
    <div class="featured">
      <!--      <div class="&#45;&#45;card">-->
      <!--        <div class="overlay"/>-->
      <!--        <img-->
      <!--          src="https://picsum.photos/200?t"/>-->
      <!--        <div class="text&#45;&#45;">-->
      <!--          <div>-->
      <!--            explore now-->
      <!--          </div>-->
      <!--          <a href="#" class="btn-code">-->
      <!--            explore now-->
      <!--          </a>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="--card small" v-for="project in portfolio" :key="project.id">
        <div class="overlay" />
        <img :src="project.thumbnail || randomImage()" :alt="project.name" />
        <div class="text">
          <div class="--title">{{ project.name }}</div>
          <article class="--details">
            {{ project.description }}
            <p v-if="project.url">
              <br />
              <a
                :href="project.url"
                class="btn-code"
                target="_blank"
                :title="project.name + ' Web application'"
              >
                explore now
              </a>
            </p>
          </article>
        </div>
      </div>
    </div>

    <h3 class="is-size-3" v-if="portfolio && portfolio.length > 5">
      Projects/Apps
      <router-link to="/lab">
        <button class="cursor button">View all projects</button>
      </router-link>
    </h3>
  </div>
</template>

<script>
import { fetchPortfolio } from '../../services/request'

export default {
  name: 'FetchPortfolio',
  props: {
    hideTitle: Boolean
  },
  data: () => ({
    portfolio: []
  }),
  mounted () {
    this.fetchPortfolio()
  },
  methods: {
    fetchPortfolio () {
      fetchPortfolio({ limit: 9 })
        .then((res) => {
          this.portfolio = res.data.data
        })
        .catch(() => {
          this.portfolio = []
        })
    },

    randomImage () {
      const num = Math.floor(Math.random() * 300)
      return `https://picsum.photos/200/${num}`
    }
  }
}
</script>
