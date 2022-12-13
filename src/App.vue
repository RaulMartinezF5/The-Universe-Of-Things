<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeViewVue from './views/HomeView.vue';

</script>

<template>
    <header>
    <img src="./assets/img/superheroe-header-1.png" alt ="The Universe Of Things">
    <h1>The Universe Of Things</h1>
  </header>

      <nav>
        <RouterLink to="/">Superhero List</RouterLink>
        <RouterLink to="/about">My Favorite Superheroes</RouterLink>
      </nav>

      <RouterView />
      
</template>

<style scoped>

header {
  background: linear-gradient(90deg, #000986 10%, #343FE1 90%);
  position:relative;
  width: 100%;
  height: 33.3vw;
}

img {
  width: 28%;
  margin: 8px 0 0 53px;

}

h1 {
  font-family: "Zen Dots", sans-serif;
  font-size: 7.7vw;
  color: #fff;
  font-weight: normal;
  position: absolute;
  top: 13vw;
  left: 33vw;}

</style>
