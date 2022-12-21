<script setup>

const props = defineProps({
   id: {
      type: Number,
      default: null
   },
   image: {
      type: String,
      default: null,

   },
   name: {
      type: String,
      default: null
   },
   powerstats: {
      type: Object,
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
      <img v-bind:src="image">
      
   </div>
</template>