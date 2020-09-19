<template>
  <div class="main">
        
        <!--Create Category -->
        <b-field label="Category" type="is-danger" message="Create a category">
            <b-input type="text" v-model="category" maxlength="30"> </b-input>
        </b-field>
        <b-button type="is-danger" @click="newCategory">Create Category</b-button><br/><br/>
        
        <!--Edit Category -->
        <b-field label="Category" type="is-danger" message="Edit category">
            <b-input type="text" v-model="editcategory" maxlength="30"> </b-input>
        </b-field>
        <b-button type="is-danger" @click="editCategory" v-bind:id="editid">Edit</b-button><br/><br/>
    
    <ul>
      <li v-for="category of categories" v-bind:key="category.id">
        {{category.name}}
        <b-button type="is-danger" v-bind:id="category.id" @click="deleteCategory">Delete</b-button>
        <b-button type="is-danger" v-bind:id="category.id" @click="() => editSelect(category.id, category.name)">Edit</b-button>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data: function(){
    return {
      categories: [],
      editCategory: "",
      editid: null
    }
  },
  //Comment out here
//   created: function(){
//     this.getCategories();
//     },
//     methods: {
// newCategory: function(){
//     const{ tokens, URL } = this.$route.query;

//     fetch(`${URL}/api/categories`, {
//       method: "post",
//       headers: {
//         authorization: `jwt ${tokens.access}`,
//         "Content-Type": "application/json" 
//       },
//       body: JSON.stringify({ category: this.category }),
//       }).then(() => {
//         this.getCategories();
//       });
//     },
// getCategories: function(){
//       const { tokens, URL } = this.$route.query;

//       fetch(`${URL}/api/categories/`, {
//         method: "get",
//         headers: {
//           authorization: `jwt ${tokens.access}`,
//         },
//           body: JSON.stringify({category: this.category}),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//           this.categories = data;
//         });
//       },
//     deleteCategory: function(){
//         const{ tokens, URL } = this.$route.query;
//         const id = event.target.id

//         fetch(`${URL}/api/categories/${id}/`, {
//           method: "delete",
//           headers: {
//             authorization: `jwt ${tokens.access}`,
//           },
//         })
//         .then(() => {
//           this.getCategories()
//         });
//       },
//       editSelect: function(id, content){
//         this.editid = id
//         this.editCategory = content
//       },
//       editCategory: function(){
//         const{ tokens, URL } = this.$route.query;
//         const id = this.editCategory

//         fetch(`${URL}/api/categories/${id}/`, {
//           method: "put",
//           headers: {
//             authorization: `jwt ${tokens.access}`,
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({category: this.editCategory})
//         })
//     },
//   }
  //Stop commenting out here
}
</script>

<style>

</style>