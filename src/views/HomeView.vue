<script setup>
import HeroPaginationVue from '../components/HeroPagination.vue'
import HeroCardVue from '../components/HeroCard.vue';
import { useHeroesList } from '@/stores/heroesList.js'
import { onBeforeMount, ref } from 'vue';

const heroesStore = useHeroesList()

onBeforeMount(() => {
  getHeroes()
})

const loading = ref(true)

const getHeroes = async () => {
  await heroesStore.fetchHeroes()
  loading.value = false
}
</script>

<template>
  <main>
    <h2>Superhero List</h2>
    <section>
      <ul>
        <HeroCardVue v-for="heroe in heroesStore.heroesList" 
        :id="heroe.id"
        :name="heroe.name"
        :images="heroe.images"
        :powerstats="heroe.powerstats"
        :heroe="heroe"></HeroCardVue>
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
