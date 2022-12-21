<script setup>
import HeroeFavouriteItem from '../components/HeroeFavouriteItem.vue'
// import { deleteFavourite } from '../stores/deleteFavourite';
import { useFavouritesList } from '../stores/favouritesList';
import { onBeforeMount, ref } from 'vue';
import {favouritesList} from '../stores/favouritesList'
const favouritesStore = useFavouritesList()

onBeforeMount(() => {
  getFavourites()
})

let loading = ref(true)

const getFavourites = async () => {
  await favouritesStore.fetchFavourites()
  loading.value = false
}

function deleteFavourite(favourite) {
    let index = favouritesList.indexOf(favourite);
    if(confirm("Estás seguro de querer eliminar a "+favourite.name+"?")){
      alert(favourite.name+" ha sido eliminado")
      favouritesList.splice(index, 1);
      loading.value = true
      getFavourites()
    }
    console.log(favouritesList);
    
}
</script>

<template>
  
  <div class="list" v-for="favourite in favouritesList">
    <HeroeFavouriteItem 
      :id="favourite.id" 
      :name="favourite.name"
      :image="favourite.images.md" 
      :powerstats="favourite.powerstats" />
      
      <button @click="deleteFavourite(favourite)">&#10084;</button>
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
