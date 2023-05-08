<template>
  <section class="social-media">
    <div class="horizontal">
      <div class="contact-us">Contact @</div>
      <div class="social-icon">
        <a :href="twitter">
          <img src="./assets/twitter.svg" :alt="`Follow ${name} in Twitter`" />
        </a>
        <a :href="linkedIn">
          <img
            src="./assets/linkedin.svg"
            :alt="`Connect with ${name} in LinkedIn`"
          />
        </a>
        <a :href="github">
          <img src="./assets/github.svg" :alt="`Follow ${name} in Clubhouse`" />
        </a>
        <a :href="instagram">
          <img src="./assets/instagram.svg" :alt="`Follow ${name} in Instagram`" />
        </a>
        <a :href="facebook">
          <img src="./assets/facebook.svg" :alt="`Contact ${name} via Email`" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialMediaModule',
  data: () => {
    return {
      name: 'Ayotunde Ayoola',
      twitter: 'https://twitter.com/Official___AY',
      linkedIn: 'https://www.linkedin.com/in/ayotunde-ayoola-27708a89/',
      github: 'https://github.com/officialAY',
      instagram: 'https://www.instagram.com/official__ay/',
      facebook: 'https://www.facebook.com/Awhy101'
    }
  },
  methods: {}
}
</script>
