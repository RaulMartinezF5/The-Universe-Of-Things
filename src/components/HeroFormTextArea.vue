<script setup>
const props = defineProps({
    name: {
        type: String, 
        default: null
    }
})
</script>


<template>
     <textarea :id=name rows="4"></textarea>
    

</template>

<style scoped>
TextArea {
    border: 1px solid #343fe1;
    border-radius: 5px;
    padding: 4px;
    display: block;
    margin-bottom: 5px;
    width: 100%;
}

legend {
    font-weight: bold;
}



</style>
