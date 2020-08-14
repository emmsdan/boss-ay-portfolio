<template>
  <section class="container">
      <div class="card-columns">
        <div v-for="post in portfolio" class="card" :key="post.id">
          <img class="card-img-top img-fluid" :src="post.thumbnail || randomImage()" alt="Card image cap">
          <div class="card-content">
            <h4 class="card-title">{{post.title}}</h4>
            <p class="card-text">{{post.description}}</p>
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import { fetchPortfolio } from '../../services/request'

export default {
  name: 'InfoCardModule',
  data: () => ({
    portfolio: []
  }),
  mounted () {
    this.fetchPortfolio()
  },
  methods: {
    fetchPortfolio () {
      fetchPortfolio(7)
        .then(res => {
          this.portfolio = res.data.data
        })
        .catch(() => {
          this.portfolio = []
        })
    },

    randomImage () {
      const num = Math.floor((Math.random() * (300)))
      return `https://picsum.photos/200/${num}`
    }
  }
}
</script>
