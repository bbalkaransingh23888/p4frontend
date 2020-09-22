<template>
  <div id="app">
    <div id="nav">
      <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" @logout="logout"/>
      <router-view  @loggedIn='login($event)' v-bind:loggedIn="loggedIn"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
 import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    Header,
    Footer 
  },
  data:function(){
    return {
      loggedIn: false,
      token: {},
      user: "",
      URL: 'https://p4backend23888.herokuapp.com'
    }
  },
  methods: {
    login: function(event){
      this.loggedIn = true
      this.token = event.token
      console.log('user',event)
      this.user = event.username
      this.$router.push({path: 'Main', query: {token: this.token, URL: this.URL, owner: this.username}});
    },
    logout: function(){
      this.loggedIn = false
      this.token = {}
      this.$router.push('/home')
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
