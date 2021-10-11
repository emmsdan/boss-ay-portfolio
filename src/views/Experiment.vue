<template>
  <section class="experiment">
    <br />
    <TopNotification
      variant="has-background-info"
      :responsive="true"
      :fade-out="false"
      message="They are limited codes and experiments here, because I'm still migrating them here."
    />

    <slither-slider
      :options="{
        animationDuration: 2500,
        secondsOnSlide: 6,
        dots: false,
        autoplay: true,
      }"
    >
      <!-- Slides -->
      <div class="slide" v-for="project in sliderProjects" :key="project.id">
        <div class="overlay" />
        <img :src="project.thumbnail || randomImage()" :alt="project.name" />
        <div class="info--">
          <div class="--title">{{ project.name }}</div>
          <p>{{ project.description }}</p>
          <a :href="project.url" class="btn-code" v-if="project.url">
            explore now
          </a>
        </div>
      </div>

      <!-- Controls -->
      <template slot="previous">
        <span />
      </template>
      <template slot="next">
        <span />
      </template>
    </slither-slider>

    <br />
    <p>
      I have created and worked on different amazing projects and experimented
      on different tools and technologies ranging from Simple Algorithms, to
      browser extensions, Mobile apps, Hacks, Bots and more.
      <br />
      I'm showcasing my projects and experiments here, along with helpful
      resources, to inspire others.
      <br />
      Here are collections of experiments to explore, with new ones added almost
      every weekend. Have fun.
    </p>
    <hr />
    <div>FEATURED COLLECTIONS</div>
    <br />

    <FetchPortfolio hide-title />

    <br />
    <h5>{{ countDown }} experiments and counting...</h5>
    <p>
      Experiments are projects that push the boundaries of art, technology,
      design and culture. Experiments inspire, teach, and delight.
    </p>
    <hr />
    <div class="space-between">
      <div>ALL PROJECTS</div>
      <DropDown label="FILTER" />
    </div>
    <br />

    <div class="featured" ref="scrollComponent">
      <div class="--card small" v-for="n in projects" :key="n">
        <div class="overlay" />
        <img :src="`https://picsum.photos/200?${n}`" />
        <div class="text">
          <div class="--title">{{ n }}Experiments with Google</div>
          <div class="--details">
            Here are collections of experiments to explore. <br />
            <br />
            <a href="#" class="btn-code">explore now</a>
          </div>
        </div>
      </div>
    </div>
    <div class="m-auto">
      <br />
      <br />
      <div class="loader position-relative" v-if="projects.length < total">
        Loading...
      </div>
      <div class="is-size-5 has-text-centered" v-else>
        That's all, nothing else to load.
      </div>
    </div>
  </section>
</template>

<script>
import DropDown from '../components/DropDown'
import { onMounted, onUnmounted, ref, onBeforeMount } from '@vue/composition-api'
import TopNotification from '../components/TopNotification'
import FetchPortfolio from '../modules/FetchPortfolio/FetchPortfolio'
import { fetchPortfolio } from '../services/request'

export default {
  components: { FetchPortfolio, TopNotification, DropDown },
  metaInfo: {
    title: 'Experiments || Emmanuel Daniel'
  },
  name: 'Experiment',
  setup () {
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    const sliderProjects = ref([])
    onBeforeMount(() => {
      fetchPortfolio({ limit: 10 })
        .then((res) => {
          sliderProjects.value = res.data.data
        })
        .catch(() => {
          sliderProjects.value = []
        })
    })
    const projects = ref([])
    const currentPage = ref(0)
    const scrollComponent = ref(null)
    const countDown = ref(1)
    const total = 30
    let countDownTimer = setInterval(() => {
      if (countDown.value >= total) {
        clearInterval(countDownTimer)
        countDownTimer = null
        return
      }
      countDown.value += 1
    }, 150)

    const handleScroll = () => {
      // const element = scrollComponent.value
      // if (element.getBoundingClientRect().bottom + 150 < window.innerHeight && currentPage.value < 60) {
      //   currentPage.value += 1
      //   projects.value.push(Math.random().toString())
      // }
    }
    return {
      projects,
      scrollComponent,
      currentPage,
      total,
      countDown,
      sliderProjects
    }
  }
}
</script>
