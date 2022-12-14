<template>
  <li>
    <figure>
      <img v-bind:src="images.lg" v-bind:alt="name">
      <div class="openHeroFile">
        <img src="../assets/img/arrowcircleup.png" alt="Superhero File" @click="showFileHero(id)">
      </div>
    </figure>
    <div class="contentHero">
      <p v-bind:class="this.$route.path !== '/' ? 'myFavoriteSuperheroAdded' : 'myFavoriteSuperhero'"
        class="myFavoriteSuperhero" @click="this.$route.path === '/' ? addFavourites(heroe) : deleteFavourite(heroe)">
        &#10084;</p>
      <h3>{{ name }}</h3>
      <p v-for="(key, power) in powerstats"><strong>{{ power }}:</strong> {{ key }}</p>
      <StarsEvaluationVue :id="id" :stars="stars" :heroe="heroe" v-if="this.$route.path !== '/'"></StarsEvaluationVue>
    </div>
    <FileVue :id="id" :heroe="heroe"></FileVue>
  </li>
</template>

<script setup>
import StarsEvaluationVue from './StarsEvaluation.vue';
import { addFavourites } from '@/stores/favouritesList';
import FileVue from './File.vue';
import { favouritesList } from '../stores/favouritesList';
import { useFavouritesList } from '../stores/favouritesList';
import { onBeforeMount, ref } from 'vue';

const favouritesStore = useFavouritesList()

onBeforeMount(() => {
  getFavourites()
})

const getFavourites = async () => {
  await favouritesStore.fetchFavourites()
}

function deleteFavourite(favourite) {
  let index = favouritesList.indexOf(favourite);
  if (confirm("Are you sure you want to remove " + favourite.name + " from Favorites?")) {
    alert(favourite.name + " has been removed.")
    favouritesList.splice(index, 1);
    favouritesList[0].name += " ";
  }
}

function showFileHero(id) {
  const visorFile = document.getElementById(id)
  visorFile.classList.remove('invisible')
}

const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    default: null
  },
  images: {
    type: Object,
    default: null
  },
  powerstats: {
    type: Object,
    default: null
  },
  heroe: {
    type: Object,
    default: null
  },
  stars: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
li {
  min-width: 190px;
  border: 1px solid #343FE1;
  border-radius: 20px;
  overflow: hidden;
}

figure {
  width: 100%;
  position: relative;
}

img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

h3 {
  font-size: 16px;
  color: #ff5e00;
  text-transform: uppercase;
  margin-bottom: 4px;
  margin-top: -24px;
  margin-right: 25px;
}

.myFavoriteSuperhero {
  color: gray;
  text-align: right;
  font-size: 24px;
}

.myFavoriteSuperheroAdded {
  color: #ff2826;
  text-align: right;
  font-size: 24px;
}

.myFavoriteSuperheroAdded:hover {
  color: gray;
  cursor: pointer;
}

.myFavoriteSuperhero:hover {
  color: #ff2826;
  cursor: pointer;
}

p {
  color: black;
  font-family: "Roboto";
}

.iconFavorite {
  width: 22px;
  position: absolute;
  right: 10px;
  top: 14px;
}

.contentHero {
  position: relative;
  padding: 20px;
}

.openHeroFile {
  position: absolute;
  bottom: 4px;
  right: 0;
  height: 40px;
  width: 40px;
  border-radius: 10px 0 0 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
}

.openHeroFile:hover {
  cursor: pointer;
  filter: invert();
}

.openHeroFile img {
  width: 30px;
  height: 30px;
  min-width: 30px;
}

@media (max-width:500px) {
  li {
    border: none;
    border-radius: 0;
    margin-bottom: 50px;
  }
}
</style>