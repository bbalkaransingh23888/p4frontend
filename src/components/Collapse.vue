<template>
  <section>
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-primary"
        slot="trigger"
        aria-controls="contentIdForA11y1"
      >
        Add Games!
      </button>
    
      <div class="notification">
        <div class="content">
          
          
          <!--Create Game Form -->
          <b-field label="Title" type="is-danger">
            <b-input class="game" type="text" v-model="gametitle"> Title </b-input>
          </b-field>

          <b-field label="Image" type="is-danger">
            <b-input placeholder="URL" type="url" v-model="gameimg"> Image </b-input>
          </b-field>

          <b-field label="Game URL" type="is-danger">
            <b-input placeholder="URL" type="url" v-model="gameurl"></b-input>
          </b-field>

          <b-field label="Description" type="is-danger">
            <b-input maxlength="1000" type="textarea" v-model="gamedescription"></b-input>
          </b-field>

          <b-field label="Additional Info" type="is-danger">
            <b-input maxlength="1000" type="textarea" v-model="gameadditionalinfo"></b-input>
          </b-field>
  
          <b-button type="is-danger" @click="newGame">Create Game</b-button><br/><br/>
          <!-- Game form ends -->
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "Collapse",
  props: ["loggedIn"], 
  data: function(){
    return {
      gametitle:  "",
      gameimgurl: "",
      gamegameurl: "",
      gamedescription: "",
      gameadditionalinfo: ""
    }
  },
  methods: {
    newGame: function(){
      const{ token, URL, username } = this.$route.query;
      fetch(`${URL}/api/games/`, {
        method: "post",
        headers: {
          authorization: `JWT ${token}`,
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ name: this.category , owner: username}),
        }).then(() => {
        this.getCategories();
      });
    },
  }
}
</script>

<style>
  
</style>