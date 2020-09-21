<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <!-- <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          /> -->
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-item>
        <!-- <b-navbar-item href="#">
          <router-link to="/Page2">About</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item> -->
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" v-if="!loggedIn">
               <router-link to="/signup" v-if="!loggedIn">Sign Up</router-link>
            </a>
            <a class="button is-primary">
            <router-link :to="{ name: 'Login', query: {URL: this.URL}}" v-bind:URL="URL" v-if="!loggedIn">Log in</router-link>
            <a class="button is-primary" v-if="loggedIn" @click=logout>Log Out</a>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['URL', 'loggedIn'],
  methods: {
    logout: function(){
      this.$emit('logout')
    }
  }
};
</script>

<style>
.header {
    width: 90%;
    margin: 10px auto
}

</style>
