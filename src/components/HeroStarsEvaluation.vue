<script setup>
import { addStars } from '../stores/favouritesList'

const starsIds = ["id-1-", "id-2-", "id-3-", "id-4-", "id-5-"]

const props = defineProps({
  id: {
    type: Number,
    default: null
  },
  stars: {
    type: Number,
    default: null
  },
  heroe: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div id="valuationStars">
    <form action="" method="post">
      <p class="clasificacion">
        <input :id=String(starsIds[0]+id) type="radio" name="estrellas" value="5" :checked="stars==5? true: false" @click="addStars(heroe, 5)"><label :for=String(starsIds[0]+id)>&#9733;</label>
        <input :id=String(starsIds[1]+id) type="radio" name="estrellas" value="4" :checked="stars==4? true: false" @click="addStars(heroe, 4)"><label :for=String(starsIds[1]+id)>&#9733;</label>
        <input :id=String(starsIds[2]+id) type="radio" name="estrellas" value="3" :checked="stars==3? true: false" @click="addStars(heroe, 3)"><label :for=String(starsIds[2]+id)>&#9733;</label>
        <input :id=String(starsIds[3]+id) type="radio" name="estrellas" value="2" :checked="stars==2? true: false" @click="addStars(heroe, 2)"><label :for=String(starsIds[3]+id)>&#9733;</label>
        <input :id=String(starsIds[4]+id) type="radio" name="estrellas" value="1" :checked="stars==1? true: false" @click="addStars(heroe, 1)"><label :for=String(starsIds[4]+id)>&#9733;</label>
      </p>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 100%;
  margin: 20px 0;
}

form p,
form input[type="submit"] {
  text-align: center;
  font-size: 20px;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
  font-size: 32px;

}

label:hover {
  cursor: pointer;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover~label {
  color: orange;
}

input[type="radio"]:checked~label {
  color: orange;
}
</style>