<script setup>
</script>

<template>
  <main>
   <h2>Superhero List</h2>
   <section>
   <ul>
     <li>
      <figure>
        <img src="../assets/img/1-a-bomb.jpg" alt="1 A Bomb">
      </figure>
    </li>
    <li>
      <figure>
        <img src="../assets/img/1-a-bomb.jpg" alt="1 A Bomb">
      </figure>
    </li>
    <li>
      <figure>
        <img src="../assets/img/1-a-bomb.jpg" alt="1 A Bomb">
      </figure>
    </li>
    <li>
      <figure>
        <img src="../assets/img/1-a-bomb.jpg" alt="1 A Bomb">
      </figure>
    </li>
    <li>
      <figure>
        <img src="../assets/img/1-a-bomb.jpg" alt="1 A Bomb">
      </figure>
    </li>
  </ul>
   </section>
  </main>
</template>

<style scoped>
h2 {
  font-family: "Zen Dots", sans-serif;
  font-size: 5.3vw;
  margin-left: 40px;
}

ul {
  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr ;
  gap: 25px;
  list-style: none;
}


li {
  min-width: 190px;
}

figure {
  width: 100%;
}

img {
  width: 100%;
}
</style>
