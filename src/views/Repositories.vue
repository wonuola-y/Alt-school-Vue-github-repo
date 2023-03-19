<script>
export default {
  name: "Repos",
  data() {
    return {
      repos: [],
      itemsPerPage: 10,
      currentPage: 1,
    };
  },
  async mounted() {
    const username = "wonuola-y";
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    this.repos = await response.json();
  },
  computed: {
    paginatedRepos() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.repos.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.repos.length / this.itemsPerPage);
    },
    pageNumbers() {
      const pageNumbers = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    },
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
<template>
  <main>
    <h1>My GitHub Repositories</h1>
    <div class="card-container">
      <div class="card" v-for="repo in paginatedRepos" :key="repo.id">
        <div>
          <h3>{{ repo.name }}</h3>
          <p class="sm">{{ repo.description }}</p>
          <button><a href="{{ repo.url }}">Visit link</a></button>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button
        class="pages"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        &lt;&lt;
      </button>
      <span v-for="pageNumber in pageNumbers" :key="pageNumber">
        <button
          class="pages"
          :class="{ active: currentPage === pageNumber }"
          @click="goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </span>
      <button
        class="pages"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        >>
      </button>
    </div>
  </main>
</template>
  
  
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap");

h1 {
  font-family: "Poppins", sans-serif;
  font-size: 3em;
  font-weight: 800;
  color: #fff;
  /* letter-spacing: .05cm; */
  margin: 1em 0;
}
h3 {
  font-size: 1.2em;
}
#app {
  background-color: rgb(24, 24, 24);
}
.pagination {
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

.card {
  display: flex;

  margin: 1em;
  border-radius: 5px;
  width: 25%;
  height: 200px;
  background: rgb(253, 247, 247);
  padding: 1em;
  text-transform: capitalize;
}
.theme {
  background: white;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(10, 10, 10);
}
.card-container {
  color: rgb(20, 19, 19);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
a {
  color: #fff;
  text-decoration: none;
  font-size: 1em;
}
.card:hover {
  transition: 0.5s ease-in-out;
  border-radius: 0;
  width: 350px;
  height: 220px;
}
.card > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  width: 100%;
  font-family: "Lato", sans-serif;
  text-align: center;
  height: 100%;
  padding: 1em;
}
.pages {
  background: #bd9aed;
  border: none;
  /* width: 5px; */
  position: relative;
  padding: 0.3em 0.7em;
  transition: 0.1s all;
  margin: 1em;
  border-radius: 5px;
}
button {
  position: fixed;

  background: #371b58;
  border: none;
  width: 150px;
  position: relative;
  padding: 0.3em 0.7em;
  transition: 0.1s all;
}

button a {
  position: relative;
  z-index: 2;
}
button:hover {
  border: 2px solid #7858a6;
  background: white;
  color: rgb(12, 12, 12);
  transition: 0.1s all;

  border-radius: 5px;
}

button:hover:after {
  width: 100%;
}
button:hover > a {
  color: rgb(10, 10, 10);
  text-decoration: none;
  font-size: 1em;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.5em;
  }
  .card {
    display: flex;
    width: 70%;
    flex-wrap: wrap;
  }
  .pages {
    background: #bd9aed;
    border: none;
    width: 50px;
    position: relative;
    padding: 0.3em 0em;
    transition: 0.1s all;
    margin: 0.5em;
    border-radius: 5px;
  }
  .pagination {
    padding: 0;
  }
}
</style>
