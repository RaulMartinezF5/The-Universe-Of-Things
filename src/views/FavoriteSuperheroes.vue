<script setup>
import HeaderVue from '../components/Header.vue';
import NavVue from '../components/Nav.vue';
import FooterVue from '../components/Footer.vue';
import CardVue from '../components/Card.vue';
import { favouritesList } from '../stores/favouritesList';
</script>

<template>
  <HeaderVue></HeaderVue>
  <NavVue></NavVue>
  <main>
    <h2>My Favorite Superheroes</h2>
    <section>
      <ul>
        <CardVue v-for="favourite in favouritesList" :id="favourite.id" :name="favourite.name"
          :images="favourite.images" :stars="favourite.stars" :heroe="favourite" :powerstats="favourite.powerstats" />
      </ul>
    </section>
  </main>
  <FooterVue></FooterVue>
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

}

@media (max-width:500px) {
  h2 {
    margin-bottom: 30px;
  }
  
  ul {
    grid-template-columns: 1fr;

  }

  section {
    padding: 0;
  }

}
</style>
