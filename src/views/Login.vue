<template>
  <div class="login">
       <input type="text" v-model="username"/>
       <input type="text" v-model="username"/>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: function(){
    return {
    username: '',
    password: ''
    }
  },
};
</script>
