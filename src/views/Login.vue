<template>
  <div class="login">
       <input class="input is-primary" type="text" v-model="username"/>
       <input class="input is-primary" type="text" v-model="username"/>
       <br/>
       <button class="button is-danger"> Log In </button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function(){
    return {
    username: "",
    password: ""
    };
  },
  methods: {
      handleLogin: function(){
          fetch('/http://www.localhost:8000/auth/users/login/')
      }
  }
};
</script>
