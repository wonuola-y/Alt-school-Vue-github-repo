<script setup>
import { RouterLink, RouterView } from "vue-router";





</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark ps-4">
      <div class="container-fluid ml-4">
        <a class="navbar-brand" href="./HomeView.vue">Wonuola</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink  class="nav-link" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
        
          <li class="nav-item">
            <RouterLink class="nav-link" to="/repos">Repos</RouterLink>
          </li>
        </ul>
    
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav{
  background-color: rgb(41, 2, 61);
position: relative;
z-index: 1;
}
</style>