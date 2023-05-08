<template>
  <div class="NotFound404 login">
    <div style="max-width: 450px; margin: auto">
      <br />
      <div class="card">
        <div class="card-header has-text-centered pad-1">
          <h1
            class="card-header-title title has-text-centered is-size-5 m-auto"
          >
            Login to Account
          </h1>
        </div>

        <div class="card-content">
          <div class="content">
            <div class="field">
              <div class="control has-icons-right">
                <input
                  class="input is-medium is-shadowless has-background-info-light has-text-dark"
                  placeholder="Assigned username"
                />
                <span class="icon is-small is-right">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-right">
                <input
                  class="input is-medium is-shadowless has-background-info-light has-text-dark"
                  placeholder="Password"
                  type="password"
                />
                <span class="icon is-small is-right">
                  <i class="fas fa-lock"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer border-0">
          <button class="login-button">Confirm Identity</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import settings from '@/settings.json'

export default {
  name: 'Login',
  metaInfo: {
    title: 'Login to access dashboard || Ayotunde Ayoola'
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
