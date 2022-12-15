<script setup>
import HeroPaginationVue from '../components/HeroPagination.vue'
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
          <div class="contentHero">
            <p class="myFavoriteSuperhero">&#10084;</p>

            <h3>1-a-bomb</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          </div>
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
    <HeroPaginationVue></HeroPaginationVue>
  </main>
</template>

<style scoped>
h2 {
  font-family: "Zen Dots", sans-serif;
  font-size: 5.3vw;
  margin-left: 40px;
}

section {
  padding: 30px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

ul {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 25px;
  list-style: none;
}


li {
  min-width: 190px;
  border: 1px solid #343FE1;
  border-radius: 20px;
  overflow: hidden;
}

figure {
  width: 100%;
}

img {
  width: 100%;
  aspect-ratio: 1/1;


}

h3 {
  font-size: 16px;
  color: #ff5e00;
  text-transform: uppercase;
  margin-bottom: 4px;
  margin-top: -24px;
}

.myFavoriteSuperhero {
  color: gray;
  text-align: right;
  font-size: 24px;
}

.myFavoriteSuperhero:hover {
  color: #ff2826;
}

p {
  color: black;
  font-family: "Roboto";
}

.iconFavorite {
  width: 22px;
  position: absolute;
  right: 10px;
  top: 14px;

}

.contentHero {
  position: relative;
  padding: 20px;

}

@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;

  }

}
</style>
