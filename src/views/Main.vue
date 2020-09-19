<template>
  <div class="main">
     <b-field label="Category Name" v-model="name"
            type="is-danger"
            message="Create a category">
            <b-input type="text" maxlength="30">
            </b-input>
        </b-field>
        <b-button type="is-danger" @click="newCategory">Create Category</b-button><br/><br/>
    <ul>
      <li v-for="category of categories" v-bind:key="category.id">{{category.title}}</li>
    </ul>
  </div>
</template>

<script>

// export default {
//   name: 'Main',
//   data: function(){
//     return {
//       categories: [],
//       games: []
//     }
//   },
//   created: function(){
//     this.getCategories();
//     },
//     newCategory: function(){
//       const{ tokens, URL } = this.$route.query;

//       fetch(`${URL}/api/categories`, {
//         method: "post",
//         headers: {
//           authorization: `jwt ${tokens.access}`
//         },
//         body: JSON.stringify({ category: this.category }),
//       }).then(() => {
//         this.getCategories();
//       });
//     },
//     methods: {
//       getCategories: function(){
//       const { tokens, URL } = this.$route.query;

//       fetch(`${URL}/api/categories/`, {
//         method: "get",
//         headers: {
//           authorization: `jwt ${tokens.access}`,
//         },
//         body: JSON.stringify({category: this.category}),
//       }).then((response) => {
//         this.getCategories();
//       });
//     }
//   }
// }
// </script>
