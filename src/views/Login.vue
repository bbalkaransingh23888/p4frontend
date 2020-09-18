<template>
  <div class="login">
       <input class="input is-primary" type="text" v-model="username"/>
       <input class="input is-primary" type="text" v-model="username"/>
       <br/>
       <button class="button is-danger" @click="handleLogin"> Log In </button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function(){
    return {
    username: "",
    password: "",
    };
  },
  methods: {
      handleLogin: function(){
          fetch('/http://www.localhost:8000/auth/users/login/', {
              method: 'post',
              headers: {
                  "Content-type": "application/json",
              },
              body: JSON.stringify({
                  username: this.username,
                  password: this.password,
              }),
          })
          .then(response => response.json())
          .then(data => {
              console.log(data)
              this.$emit("loggedIn", data)
          });
      },
  },
};
</script>
