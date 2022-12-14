<script setup>
import { onBeforeMount, ref} from 'vue'
import { useHeroesList} from '@/stores/heroesList.js'

const heroesList = useHeroesList()

onBeforeMount(() => {
  getHeroes()
})

const loading = ref(true)

const getHeroes = async () => {
  await heroesList.fetchHeroes()
  loading.value = false
}

// console.log(useHeroesList);
</script>

<template>




</template>

<style scoped>

</style>
