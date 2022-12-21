<script setup>
import HeroPaginationVue from '../components/HeroPagination.vue'
import HeroCardVue from '../components/HeroCard.vue';
import { favouritesList } from '../stores/favouritesList';
</script>

<template>
  <main>
    <h2>My Favorite Superheroes</h2>
    <section>
      <ul>
        <HeroCardVue v-for="favourite in favouritesList" :id="favourite.id" :name="favourite.name" :images="favourite.images"  :stars="favourite.stars" :heroe="favourite"
          :powerstats="favourite.powerstats"/>
      </ul>
    </section>
    <!-- <HeroPaginationVue></HeroPaginationVue> -->
  </main>
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

@media (max-width:700px) {
  ul {
    grid-template-columns: 1fr 1fr;
  }

}@media (max-width:500px) {
  ul {
    grid-template-columns: 1fr;
    
  }
  section {
  padding: 0;
}

}



</style>
