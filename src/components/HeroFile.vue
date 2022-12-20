<script setup>
import { computed } from "vue";
import { heroFile } from "../stores/showFile"

const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  heroe: {
    type: Object,
    default: null
  }
  })
function goInvisible(id) {
  const visor = document.getElementById(id);
  visor.classList.add("invisible")
}

</script>
<template>
  <div :id="id" class="invisible visor">
    <div id="fileDetails">
      <button @click="goInvisible(id)">X</button>
      <p>{{ heroe.name }}</p>
      <p>{{ heroe.slug }}</p>  
      <p v-for="(key, power) in heroe.powerstats"><strong>{{power}}:</strong> {{ key }}</p>
      <p v-for="(key, power) in heroe.appearance"><strong>{{power}}:</strong> {{ key }}</p> 
      <p v-for="(key, power) in heroe.biography"><strong>{{power}}:</strong> {{ key }}</p>
      <p v-for="(key, power) in heroe.work"><strong>{{power}}:</strong> {{ key }}</p>
      <p v-for="(key, power) in heroe.conections"><strong>{{power}}:</strong> {{ key }}</p> 
    </div>

  </div>
</template>
  
<style scope>

.visor {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10vw;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10001;
  position: fixed;
}

#fileDetails {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  position: relative;
}

#fileDetails p {
  color: #000;
}

.visor button {
  position: absolute;
  top: 30px;
  right: 30px;
}

.invisible {
  display: none;
}
</style>