<script setup>

const props = defineProps({
   id: {
      type: Number,
      default: null
   },
   images: {
      type: String,
      default: null,

   },
   name: {
      type: String,
      default: null
   },
   powerstats: {
      type: String,
      default: null
   }

})
</script>
<template>
   <div>
      <h4>{{name}}</h4>
      <h4>{{id}}</h4>
      <div class="powerstats" v-for="power in powerstats">
      <h4>{{power}}</h4>
      </div>
      <img v-bind:src=images.sm>
      
   </div>
</template>