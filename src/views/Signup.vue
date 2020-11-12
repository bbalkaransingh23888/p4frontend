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
  props: ["url"],
  data: function(){
    return {
        sUsername: "",
        sPassword: "",
        firstName: "",
        lastName: "",
        email: "",
    };
  },
  methods: {
      handleSignup: function(){
      fetch(`${this.URL}auth/users/register/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.sUsername,
          password: this.sPassword,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName
        }),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => {
          this.no_console = data;
          this.$buefy.toast.open({
            message: "Sign up successful! Now login in to continue.",
            duration: 1000,
            type: 'is-success'
          });
        });
    },
  },
}
</script>
