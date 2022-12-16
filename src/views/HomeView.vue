<script setup>
import HeroPaginationVue from '../components/HeroPagination.vue'
import HeroCardVue from '../components/HeroCard.vue';
</script>

<template>
  <main>
    <h2>Superhero List</h2>
    <section>
      <ul>
        <HeroCardVue></HeroCardVue>
      </ul>
    </section>
    <HeroPaginationVue></HeroPaginationVue>
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
</style>
