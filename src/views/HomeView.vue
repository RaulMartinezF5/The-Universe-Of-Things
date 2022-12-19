<script setup>
import HeroeItemVue from '../components/HeroeItem.vue';
import { useHeroesList } from '@/stores/heroesList.js'
import { addFavourites} from '@/stores/favouritesList';
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
   <section>
    <ul>
      <div class="list" v-for="heroe in heroesStore.heroesList">
        <li>
      <HeroeItemVue 
        :id="heroe.id" 
        :name="heroe.name"
        :image="heroe.images.md" 
        :powerstats="heroe.powerstats" />
        <button @click="addFavourites(heroe)">&#10084;</button>
    </li>
    </div>
    </ul>
   </section>
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
  grid-template-columns:1fr 1fr 1fr;
  
}

}

</style>
