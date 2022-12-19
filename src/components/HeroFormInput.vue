<script setup>
const props = defineProps({
    name: {
        type: String, 
        default: null
    }
})
</script>


<template>
     <input type="text" :id=name> 
    

</template>

<style scoped>
input {
    border: 1px solid black;
}

</style>
