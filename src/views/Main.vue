<template>
  <div class="main">
        
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
        <button v-bind:id="category.id" @click="deleteCategory">Delete</button>
        <button v-bind:id="category.id" @click="() => editSelect(category.id, category.name)">Edit</button>
        <!-- The collapse below allows me to collapse a menu, which I intend
        to use for my games form. It is imported from the Collapse.vue file. 
        S/o Rosemary for helping me out with this-->
        <Collapse />
      </li>
    </ul>
  </div>
</template>

<script>
import Collapse from '../components/Collapse'
export default {
  name: 'Main',
  components: {Collapse},
  data: function(){
    return {
      categories: [],
      category: "",
      edit: "",
      editid: null
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
        });
      },
    deleteCategory: function(event){
        const{ token, URL } = this.$route.query;
        const id = event.target.id

        fetch(`${URL}/api/categories/${id}/`, {
          method: "delete",
          headers: {
            authorization: `JWT ${token}`,
          },
        })
        .then(() => {
          this.getCategories()
        });
      },
      editSelect: function(id, content){
        this.editid = id
        this.edit = content
      },
      editCategory: function(){
        const{ token, URL } = this.$route.query;
        console.log('edit', this.edit)
        console.log('editCategory', this.editCategory)
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