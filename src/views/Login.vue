<template>
  <div class="login">
       <input class="input is-primary" type="text" v-model="username"/>
       <input class="input is-primary" type="text" v-model="username"/>
       <button> Log In </button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function(){
    return {
    username: "",
    password: ""
    }
  },
};
</script>
