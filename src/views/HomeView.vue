<template>
  <HeaderVue></HeaderVue>
  <NavVue></NavVue>
  <main>
    <h2>Superhero List</h2>
    <section>
      <ul>
        <CardVue v-for="heroe in heroesStore.heroesList" :id="heroe.id" :name="heroe.name" :images="heroe.images"
          :powerstats="heroe.powerstats" :heroe="heroe"></CardVue>
      </ul>
    </section>
  </main>
  <FooterVue></FooterVue>
</template>

<script setup>
import HeaderVue from '../components/Header.vue';
import NavVue from '../components/Nav.vue';
import FooterVue from '../components/Footer.vue';
import CardVue from '../components/Card.vue';
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
  grid-template-columns:1fr 1fr 1fr 1fr ;
  gap: 25px;
  list-style: none;
}


li {
  min-width: 190px;
  border: 1px solid #343FE1;
  border-radius: 20px;
  overflow: hidden;
}

figure {
  width: 100%;
}

img {
  width: 100%;
  aspect-ratio: 1/1;
  

}

h3 {
  font-size: 16px;
  color:#ff5e00;
  margin: 10px 0 15px 10px;
}

h3 {
  text-transform: uppercase;
}

p {
  margin: 0 10px 15px 10px;
}

.iconFavorite {
  width: 22px;
  position: absolute;
  right: 10px;
  top: 2px;

}

.contentHero {
  position: relative;
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
