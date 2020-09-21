<template>
  <div class="signup">

          <b-field label="Username" type="is-link">
              <b-input v-model="username"></b-input>
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
              <b-input type="password" v-model="password" password-reveal></b-input>
          </b-field>
       <br/>
       <button class="button is-link" @click="handleSignup"> Sign Up </button>

  </div>
</template>

<script>

export default {
  name: 'Signup',
  // data: function(){
  //   username = "",
  //   password = "",
  //   firstName = "",
  //   lastName = "",
  //   email = ""
  // }
}
</script>