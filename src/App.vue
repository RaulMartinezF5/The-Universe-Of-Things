<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeroHeaderVue from './components/HeroHeader.vue';
import HeroFooterVue from './components/HeroFooter.vue';

</script>

<template>
  <HeroHeaderVue></HeroHeaderVue>

  <nav>
    <RouterLink to="/">Superhero List</RouterLink>
    <RouterLink to="/favoritesuperheroes">My Favorite Superheroes</RouterLink>
    <RouterLink to="/addhero" v-if="this.$route.path !== '/'">Add Your Heroes</RouterLink>
  </nav>

  <RouterView />
  <HeroFooterVue></HeroFooterVue>
</template>

<style scoped>



nav {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: end;
  position: sticky;
  top: 0;
}

a {
  text-decoration: none;
  color: #FF5E00;
  font-weight: bold;
  display: inline-block;
  height: 47px;
  padding: 0 20px;
  line-height: 47px;
  border: 1px solid #343FE1;
  background-color: #343FE1;
}

nav a:hover,
nav a.router-link-exact-active:hover {
  color: #343FE1;
  background-color: #fff;
}

nav a.router-link-exact-active {
  color: #343FE1;
  background-color: #fff;
}
</style>
