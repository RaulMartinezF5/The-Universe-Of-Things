<script setup>
import HeroPaginationVue from '../components/HeroPagination.vue'
</script>

<template>
  <main>
    <h2>My Favorite Superheroes</h2>
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
            <div id="valuationStars">
              <form action="" method="post">
                <!-- <p>estrellas: 3</p> -->
                <p class="clasificacion">
                  <input id="radio1" type="radio" name="estrellas" value="5"><label for="radio1">&#9733;</label>
                  <input id="radio2" type="radio" name="estrellas" value="4"><label for="radio2">&#9733;</label>
                  <input id="radio3" type="radio" name="estrellas" value="3"><label for="radio3">&#9733;</label>
                  <input id="radio4" type="radio" name="estrellas" value="2"><label for="radio4">&#9733;</label>
                  <input id="radio5" type="radio" name="estrellas" value="1"><label for="radio5">&#9733;</label>
                </p>
                <!-- <p><input type="submit" value="submit" name="submit" /></p> -->
              </form>
            </div>
            <button>Modify Superhero</button>
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




.iconFavorite {
  width: 22px;
  position: absolute;
  right: 10px;
  top: 12px;
}

.contentHero {
  position: relative;
  padding: 20px;

}

p {
  color: black;
  font-family: "Roboto";
}

button {
  display: inline-block;
  background-color: #ff9801;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: 3px solid #ff9801;
  width: 100%;


}

button:hover {
  border: 3px solid #ff9801;
  background-color: #fff;
  color: #ff9801;
}

@media (max-width:900px) {
  ul {
    grid-template-columns: 1fr 1fr 1fr;

  }

}
</style>
