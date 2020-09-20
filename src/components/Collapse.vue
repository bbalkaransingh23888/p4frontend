<template>
  <section>
    <b-collapse :open="false" aria-id="contentIdForA11y1">
      <button
        class="button is-primary"
        slot="trigger"
        aria-controls="contentIdForA11y1"
      >
        Games!
      </button>
      <div v-for="game of this.games" v-bind:key="game.id"><p>{{game.title}}</p> </div>
      <div class="notification">
        <div class="content">
          
          <!--Create Game Form -->
          <b-field label="Game" class="game" type="is-danger" message="Create a game">
            
            <b-input class = "game" type="text" v-model="gametitle"> Title </b-input>
            <b-input class = "game" type="text" v-model="gameimg"> Image </b-input>
            <b-input class = "game" type="text" v-model="gameurl"> URL </b-input>
            <b-input class = "game" type="text" v-model="gamedescription"> Description </b-input>
            <b-input class = "game" type="text" v-model="gameadditionalinfo"> Additional Info </b-input>
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
  b-input {
    display: inline-block;
  }
</style>