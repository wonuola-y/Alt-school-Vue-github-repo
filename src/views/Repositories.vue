<template>
  <main>
    
    <h1>My GitHub Repositories</h1>
   <div class="card-container">
    <div class="card" v-for="repo in paginatedRepositories" :key="repo.id" >
      <!-- <img src="" alt="" /> -->
      <div>
        <h3>{{ repo.name  }}</h3>
        <p>{{ repo.description }}</p>
        <button><a href="{{ repo.url }}">Visit link</a></button>
      </div>
   </div>
    </div>

  

    <VueAwesomePaginate
      :page-count="pageCount"
      :on-click="goToPage"
      :container-class="'pagination'"
      :active-page-class="'active'"
      :current-page="currentPage"
      :page-class="'page-item'"
      :prev-class="'page-item'"
      :next-class="'page-item'"
      :total-items="30"
      :model-value="9"
    
   variant="outline-primary" />


  </main>
</template>
  
  <script>
import axios from "axios";
import { VueAwesomePaginate } from "vue-awesome-paginate";
// import Paginate from "vuejs-paginate";

export default {
  name: "Repositories",
  data() {
    return {
      repositories: [],
      currentPage: 1,
      perPage: 9,
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
</script>
<style scoped>
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
 width: 400px;
    height: 220px;
}
button{
position: fixed;
transform: translate(-50%, -50%);    background: rgb(12, 12, 12);
    border: none;
    padding: 0 .7em;
    transition: .1s ease-in-out;
}
button:hover {
    /* background: rgb(12, 12, 12); */
    background: rgb(253, 247, 247);
    border: 2px solid rgb(10, 10, 10);
    border-radius: 2px;
    transition: .1s ease-in-out;
    text-decoration: none;
    width: 100px;
   
}
button a{
    position: relative;
    z-index: 0;
}
a:hover{
    color: rgb(10, 10, 10);
    text-decoration: none;
    font-size: 1em;
}

</style>
