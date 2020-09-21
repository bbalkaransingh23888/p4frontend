<template>
  <div class="login">
          <b-field label="Username" type="is-success">
              <b-input v-model="username"></b-input>
          </b-field>

          <b-field label="Password" type="is-success">
              <b-input type="password" v-model="password" password-reveal></b-input>
          </b-field>
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
          console.log(this.$route.query.URL)
          fetch(`${this.$route.query.URL}/auth/users/login/`, {    
              method: 'post',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: this.username,
                  password: this.password,
              }),
          })
          //Jendri's solution to login issue, thanks! 
          .then(response => {
            if (response.status !==200){
              response.json()
            } else {
              return response.json()
            }
          })
          .then(data => {
            console.log('data', data)
            if (data){
              this.$emit('loggedIn', data)
            } else {
              alert('Incorrect Login')
            }
          });
      },
  },
};
</script>
