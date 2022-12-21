<template>
  <div :id="id" class="invisible visor">
    <div class="fileDetails">
      <button @click="goInvisible(id)">X</button>
      <img :src="heroe.images.md" :alt="heroe.name">
      <div class="heroInformation">
        <h4>{{ heroe.name }} <span>{{ heroe.slug }}</span></h4>
        <p v-for="(key, power) in heroe.powerstats"><strong>{{ power }}:</strong> {{ key }}</p>
        <p v-for="(key, power) in heroe.appearance"><strong>{{ power }}:</strong> {{ key }}</p>
        <p v-for="(key, power) in heroe.biography"><strong>{{ power }}:</strong> {{ key }}</p>
        <p v-for="(key, power) in heroe.work"><strong>{{ power }}:</strong> {{ key }}</p>
        <p v-for="(key, power) in heroe.conections"><strong>{{ power }}:</strong> {{ key }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
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

<style scoped>
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

.fileDetails {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 30px 90px 30px 30px;
  position: relative;
  display: flex;
}

button {
  position: absolute;
  top: 30px;
  right: 30px;
  display: inline-block;
  background-color: #ff9801;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: 3px solid #ff9801;
}

button:hover {
  border: 3px solid #ff9801;
  background-color: #fff;
  color: #ff9801;
}

.fileDetails p {
  color: #000;
  margin: 5px;
}

.invisible {
  display: none;
}

.heroInformation {
  margin: 0 0 30px 30px;
  overflow: auto;
  width: 100%;
}

h4 {
  font-size: 24px;
  color: #ff9801;
  font-family: "Zen DOts";
}

h4 span {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: normal;
  color: #000000;
  font-style: italic;
}

@media (max-width:900px) {
  .fileDetails {
    flex-direction: column;
    overflow: auto;
    margin: 0 60px 0 0;
  }

  .heroInformation {
    margin: 0 0 0 0;
    overflow: initial;
    width: auto;
  }

  .fileDetails img {
    width: 100%;
    aspect-ratio: 1/0.5;
    object-fit: cover;
  }

  h4 {
    margin-top: 20px;
  }
}
</style>