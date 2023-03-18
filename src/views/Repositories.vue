<script>
import resolve from '@rollup/plugin-node-resolve';

import axios from "axios";
import { VueAwesomePaginate } from "vue-awesome-paginate";
// import Paginate from "vuejs-paginate";


export default {
  name: "Repositories",
  plugins: [
    resolve(),
  ],
  data() {
    return {
      repositories: [],
      currentPage: 2,
      perPage: 12,
      activate: false
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.repositories.length / this.perPage);
    },
    paginatedRepositories() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.repositories.slice(start, end);
    },
  },
  methods: {
    goToPage(page) {
      this.currentPage = page;
    },
    async getRepositories() {
      const response = await axios.get(
        "https://api.github.com/users/wonuola-y/repos"
      );
      this.repositories = response.data;
    },
  },
  created() {
    this.getRepositories();
  },
  components: { VueAwesomePaginate },
};
// import { onMounted } from "vue";


const setTheme = () =>{
  const newTheme = 'lightblue';
  document.querySelector('button').style.backgroundColor = newTheme;
}
</script>
<template>
  <main>
    <!-- <button @click="setTheme" class="theme"> change color </button> -->
    <h1>My GitHub Repositories</h1>
   <div class="card-container">
    <div class="card" v-for="repo in paginatedRepositories" :key="repo.id" >
      <!-- <img src="" alt="" /> -->
      <div>
        <h3 >{{ repo.name  }}</h3>
        <p class="sm">{{ repo.description }}</p>
        <button><a href="{{ repo.url }}">Visit link</a></button>
      </div>
     <!-- to do
1. Search for nice typing or text effect for the home page.
2. Work on the mobile view 
3. Write about you  -->
   </div>
    </div>

  

    <VueAwesomePaginate
      :page-count="pageCount"
      :on-click="goToPage"
      :container-class="'pagination'"
      :active-page-class="'active'"
      :current-page="currentPage"
      :page-class="'page-item'"
      :total-items="30"
      :model-value="9"
    
   variant="outline-primary" />


  </main>
</template>
  
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap");

h1{
    font-family: 'Poppins', sans-serif;
    font-size: 3em;
    font-weight: 800;
    color: #fff;
    /* letter-spacing: .05cm; */
    margin: 1em 0;
}
h3{
    font-size: 1.2em;
    /* color: #fff; */
}
#app{
    background-color: rgb(24, 24, 24);
}
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  font-size: 1.25rem;
  line-height: 1.5;
 border: none;
 padding: 1em;
}
.number-buttons {
 padding: 1em;
 border: none;
}

.card{
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* border: 2px saddlebrown solid; */
    margin: 1em;
    border-radius: 5px;
    width:25% ;
    height: 200px;
    background: rgb(253, 247, 247);
    /* box-shadow: 3px -6px 86px -22px rgba(79,73,73,0.75); */
    padding: 1em;
    text-transform: capitalize;
   
}
.theme{
  background: white;
}
 main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(10, 10, 10);

}
.card-container{
    color: rgb(20, 19, 19);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
a{
    color: #fff;
    text-decoration: none;
    font-size: 1em;
}
.card:hover{
    transition: .5s ease-in-out;
    border-radius: 0;
 width: 350px;
    height: 220px;
}
.card > div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 2px solid red; */
    width: 100%;
    font-family: 'Lato', sans-serif;
    text-align: center;
    height: 100%;
    padding: 1em;
}
button{
position: fixed;
/* transform: translate(-50%, -50%);    */
 background:#371B58;
    border: none;
    width: 150px;
    position: relative;
    padding: .3em .7em;
    transition: .1s all;
}

button a{
    position: relative;
    z-index: 2;
}
button:hover{
 border: 2px solid #7858A6;
    background:white;
    color: rgb(12, 12, 12);
    transition: .1s all;
  /* background: rgb(253, 247, 247); */
    border-radius: 5px;
  
  /* transition: all .35s; */
}

/* button:hover{
  color: #fff;
} */

button:hover:after{
  width: 100%;
}
button:hover > a{
    color: rgb(10, 10, 10);
    text-decoration: none;
    font-size: 1em;
}
@media screen and (max-width: 600px) {
  h1{
    font-size: 1.5em;
  }
  .card{
    display: flex;
    width: 70%;
    flex-wrap: wrap;
  }
}
</style>
