<script setup>
import HeroeFavouriteItem from '../components/HeroeFavouriteItem.vue'
import { favouritesList } from '../stores/favouritesList';
</script>

<template>
  
  <div class="list" v-for="favourite in favouritesList">
    <HeroeFavouriteItem 
      :id="favourite.id" 
      :name="favourite.name"
      :image="favourite.images.md" 
      :powerstats="favourite.powerstats" />
      <button @click="addFavourites(favourite)">&#10084;</button>
  </div>


</template>

<style scoped>
h2 {
  font-family: "Zen Dots", sans-serif;
  font-size: 5.3vw;
  margin-left: 40px;
}

section {
  padding: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
}

@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;

  }

}
</style>
