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
            <b-input placeholder="URL" type="url" v-model="gameimage"> Image </b-input>
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
  
          <b-button type="is-danger" @click="newGame(category_id)">Create Game</b-button><br/><br/>
          <!-- Game form ends -->
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
export default {
  name: "Collapse",
  props: ["loggedIn", "category_id"], 
  data: function(){
    return {
      gametitle:  "",
      gameimage: "",
      gameurl: "",
      gamedescription: "",
      gameadditionalinfo: ""
    }
  },
  methods: {
    newGame: function(category_id){
      const{ token, URL} = this.$route.query;
      // const id = event.target.id
      console.log("category", category_id)
      // console.log("owner", owner)
      console.log("title", this.gametitle) 
      console.log("image_url", this.gameimage) 
      console.log("game_url", this.gameurl) 
      console.log("description", this.gamedescription)
      console.log("additional_info", this.gameadditionalinfo)
      fetch(`${URL}/api/games/`, {
        method: "post",
        headers: {
          authorization: `JWT ${token}`,
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
          //Note to self: key is what you have in your backend, and value is this.<frontend equivalent>
          title:this.gametitle , category: category_id,  image_url:this.gameimage, 
          game_url:this.gameurl, description:this.gamedescription, additional_info:this.game}),
        }).then(() => {
        //this.getCategories();
      });
    },
  }
}
</script>

<style>
  
</style>