<template>
  <section class="social-media">
    <div class="horizontal">
      <div class="contact-us">
        Contact @
      </div>
      <div class="social-icon">
        <a :href="twitter">
          <img src="./assets/twitter.svg" alt="Follow EmmsDan in Twitter"  />
        </a>
        <a :href="linkedIn">
          <img src="./assets/linkedin.svg"  alt="Connect with EmmsDan in LinkedIn" />
        </a>
        <a :href="clubhouse">
          <img src="./assets/clubhouse.svg"  alt="Follow EmmsDan in Clubhouse" />
        </a>
        <a :href="instagram">
          <img src="./assets/instagram.svg" alt="Follow EmmsDan in Instagram" />
        </a>
        <a :href="email">
          <img src="./assets/email.svg" alt="Contact EmmsDan via Email" />
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
      twitter: 'https://twitter.com/emmsdan',
      linkedIn: 'http://linkedin.com/in/emmsdan/',
      clubhouse: 'https://clubhub.site/@emmsdan',
      instagram: 'https://www.instagram.com/emmsdan/',
      email: 'mailto:danielem@emmsdan.com.ng'
    }
  },
  methods: {}
}
</script>
