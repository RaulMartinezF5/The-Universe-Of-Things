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
   </div>
</template>