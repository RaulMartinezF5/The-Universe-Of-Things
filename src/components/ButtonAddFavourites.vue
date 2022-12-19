<script setup>
    function addFavourites(heroe){
        console.log("Hola soy el boton");
        favouritesList= []
        favouritesList.push(heroe);
    }
</script>

<template>
    <div>
        <button @click="addFavourites()">&#10084;</button>
    </div>
</template>

<style>

</style>