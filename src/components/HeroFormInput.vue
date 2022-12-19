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
    border: 1px solid #343fe1;
    border-radius: 5px;
    padding: 4px;
    display: block;
    margin-bottom: 5px;
}

legend {
    font-weight: bold;
}



</style>
