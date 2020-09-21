<template>
  <div class="main" v-if="loggedIn">
        
        <!--Create Category -->
        <b-field label="Category" type="is-danger" message="Create a category">
            <b-input type="text" v-model="category" maxlength="30"> </b-input>
        </b-field>
        <b-button type="is-danger" @click="newCategory">Create Category</b-button><br/><br/>
        
        <!--Edit Category -->
        <b-field label="Category" type="is-danger" message="Edit category">
            <b-input type="text" v-model="edit" maxlength="30"> </b-input>
        </b-field>
        <b-button type="is-danger" @click="editCategory" v-bind:id="editid">Confirm Edit</b-button><br/><br/>
    
    <ul>
      <li v-for="category of categories" v-bind:key="category.id">
        {{category.name}}
        <br/> <br/>
        <b-button type="is-danger" v-bind:id="category.id" @click="deleteCategory(category.id)"> Delete </b-button>
        <b-button type="is-warning" v-bind:id="category.id" @click="() => editSelect(category.id, category.name)"> Edit </b-button>
        <br/> 
        <div v-for="game of category.games" v-bind:key="game.id"> 
          <p>{{game.title}} <br/>
            {{game.img_url}} <br/>
            {{game.game_url}} <br/>
            {{game.description}} <br/>
            {{game.additional_info}}</p> 
        </div>
        <br/>
        
        <!--The collapse below allows me to collapse a menu, which I intend
        to use for my games form. It is imported from the Collapse.vue file. 
        S/o Rosemary for helping me out with this-->
        <Collapse :games="category.games" :category_id="category.id" :owner="category.owner"/>
        <br/>
        
      </li>
    </ul>
  </div>
</template>

<script>
import Collapse from '../components/Collapse'
export default {
  name: 'Main',
  components: {Collapse},
  props: ["loggedIn"],
  data: function(){
    return {
      categories: [],
      category: "",
      edit: "",
      editid: null,
      //games: [],
    }
  },
  //Fixed categories CRUD, thanks Rosemary!
  created: function(){
    this.getCategories();
    },
     methods: {
newCategory: function(){
    const{ token, URL, username } = this.$route.query;
    fetch(`${URL}/api/categories/`, {
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
getCategories: function(){
      const { token, URL } = this.$route.query;
      fetch(`${URL}/api/categories/`, {
        method: "get",
        headers: {
          authorization: `JWT ${token}`,
        },
        })
        .then((response) => response.json())
        .then((data) => {
          this.categories = data.results;
          console.log(data.results[0].games)
        });
      },
    deleteCategory: function(id){
        const{ token, URL } = this.$route.query;
        // const id = event.target.id
        console.log(id)
        fetch(`${URL}/api/categories/${id}/`, {
          method: "delete",
          headers: {
            authorization: `JWT ${token}`,
          },
        }).then(() => {
          this.getCategories()
        });
      },
      editSelect: function(id, content){
        this.editid = id
        this.edit = content
      },
      editCategory: function(){
        const{ token, URL } = this.$route.query;
        fetch(`${URL}/api/categories/${this.editid}/`, {
          method: "put",
          headers: {
            authorization: `JWT ${token}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: this.edit})
        })
        .then(() => {
        this.getCategories();
      });
    },
   }
}
</script>

<style>
  
  
  
</style>