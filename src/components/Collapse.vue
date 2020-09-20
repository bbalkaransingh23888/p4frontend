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
      <div class="notification">
        <div class="content">
          <!--Create Game Form -->
          <b-field label="Game" type="is-danger" message="Create a game">
            <b-input label="Title" type="text" v-model="gametitle"> </b-input>
            <b-input label="Image" type="text" v-model="gameimg"> </b-input>
            <b-input label="Url" type="text" v-model="gameurl"> </b-input>
            <b-input label="Description" type="text" v-model="gamedescription"> </b-input>
            <b-input label="Additional Info" type="text" v-model="gameadditionalinfo"> </b-input>
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
