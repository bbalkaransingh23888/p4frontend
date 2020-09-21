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
          <b-field label="Title" type="is-danger" message="Create a game">
            <b-input class="game" type="text" v-model="gametitle"> Title </b-input>
          </b-field>

          <b-field label="Image">
            <b-input placeholder="URL" type="url" v-model="gameimg"> Image </b-input>
          </b-field>

          <b-field label="Game URL">
            <b-input placeholder="URL" type="url" v-model="gameurl"></b-input>
          </b-field>

          <b-field label="Description">
            <b-input maxlength="1000" type="textarea"></b-input>
          </b-field>

          <b-field label="Additional Info">
            <b-input maxlength="1000" type="textarea"></b-input>
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
};
</script>

<style>
  
</style>