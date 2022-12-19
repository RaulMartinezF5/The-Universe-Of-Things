<script setup>
import HeroHeaderVue from './components/HeroHeader.vue';
import HeroFooterVue from './components/HeroFooter.vue';
import HeroNavVue from './components/HeroNav.vue';import { onBeforeMount, ref } from 'vue'
import { useHeroesList } from '@/stores/heroesList.js'
import HeroeItem from '@/components/HeroeItem.vue'


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

console.log(useHeroesList);
</script>

<template>
  <HeroHeaderVue></HeroHeaderVue>
  <HeroNavVue></HeroNavVue>
  <HeroFooterVue></HeroFooterVue>
</template>

}

