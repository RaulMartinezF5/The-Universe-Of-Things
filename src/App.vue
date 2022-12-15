<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeViewVue from './views/HomeView.vue';
import { onBeforeMount, ref } from 'vue'
import { useHeroesList } from '@/stores/heroesList.js'
import HeroeItem from '@/components/HeroeItem.vue'
import PRUEBAVISTA from './views/PRUEBAVISTA.vue';

const heroesStore = useHeroesList()

onBeforeMount(() => {
  getHeroes()
})

const loading = ref(true)

const getHeroes = async () => {
  await heroesStore.fetchHeroes()
  loading.value = false
  console.log(heroesStore.heroesList);
}

// console.log(useHeroesList);
</script>

<template>

  <header>
    <img src="./assets/img/superheroe-header-1.png" alt="The Universe Of Things">
    <h1>The Universe Of Things</h1>
  </header>

  <nav>
    <RouterLink class="active" to="/">Superhero List</RouterLink>
    <RouterLink to="/about">My Favorite Superheroes</RouterLink>
  </nav>

  <RouterView />
  <div class="list" v-for="heroe in heroesStore.heroesList">
    <HeroeItem 
      :id="heroe.id" 
      :name="heroe.name"
      :images="heroe.images" 
      :powerstats="heroe.powerstats" />
  </div>

  <PRUEBAVISTA />
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #000986 10%, #343FE1 90%);
  position: relative;
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
  left: 33vw;
}

nav {
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: end;
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


a:hover {
  color: #343FE1;
  background-color: #fff;
}

.active {
  color: #343FE1;
  background-color: #fff;
}
</style>
