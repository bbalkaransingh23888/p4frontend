<template>
  <div class="login">
          <b-field label="Username" type="is-success">
              <b-input v-model="lUsername"></b-input>
          </b-field>

          <b-field label="Password" type="is-success">
              <b-input type="password" v-model="lPassword" password-reveal></b-input>
          </b-field>
       <br/>
       <button class="button is-success" @click="handleLogin"> Log In </button>
  </div>
</template>

<script>

//Thanks Lia for pointing me in the right direction to fix 
//the initial login issues

export default {
  name: 'Login',
  data: function(){
    return {
    lUsername: "",
    lPassword: "",
    };
  },
  methods: {
      handleLogin: function(){
          fetch(`${this.$route.query.URL}auth/users/login/`, {    
              method: 'post',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: this.lUsername,
                  password: this.lPassword,
              }),
          })
          //Jendri's solution to the wrong-username/pw-still-logs-you-in issue, thanks! 
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
