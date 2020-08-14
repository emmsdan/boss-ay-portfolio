<template>
  <div class="home">
    <InfoCard msg=""/>
    <FetchPortfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import InfoCard from '@module/InfoCard/InfoCard'
import FetchPortfolio from '@module/FetchPortfolio/FetchPortfolio'

export default {
  name: 'Home',
  components: {
    InfoCard, FetchPortfolio
  },
  methods: {
  }
}
</script>
