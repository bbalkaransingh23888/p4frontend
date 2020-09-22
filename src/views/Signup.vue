<template>
  <div class="signup">

          <b-field label="Username" type="is-link">
              <b-input v-model="sUsername"></b-input>
          </b-field>

          <b-field label="Email" type="is-link">
              <b-input v-model="email"></b-input>
          </b-field>

          <b-field label="First Name" type="is-link">
              <b-input v-model="firstName"></b-input>
          </b-field>

          <b-field label="Last Name" type="is-link">
              <b-input v-model="lastName"></b-input>
          </b-field>

          <b-field label="Password" type="is-link">
              <b-input type="password" v-model="sPassword" password-reveal></b-input>
          </b-field>
       <br/>
       <button class="button is-link" @click="handleSignup"> Sign Up </button>

  </div>
</template>

<script>

export default {
  name: 'Signup',
  data: function(){
    return {
        sUsername: "",
        sPassword: "",
        firstName: "",
        lastName: "",
        email: ""
    };
  },
  methods: {
      handleSignup: function(){
          console.log(this.$route.query.URL)
          fetch(`${this.$route.query.URL}/auth/users/register/`, {    
              method: 'post',
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: this.sUsername,
                  password: this.sPassword,
                  first_name: this.firstName,
                  last_name: this.lastName,
                  email: this.email
              }),
          })
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
              alert('Invalid Registration')
            }
          });
      },
   },
}
</script>