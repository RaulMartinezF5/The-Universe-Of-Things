<script setup>

</script>

<template>

    <li>
        <figure>
            <img src="../assets/img/1-a-bomb.jpg" alt="1 A Bomb">
            <div class="openHeroFile">
                <img src="../assets/img/arrowcircleup.png" alt="Superhero File">
            </div>
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
</template>

<style scoped>
li {
  min-width: 190px;
  border: 1px solid #343FE1;
  border-radius: 20px;
  overflow: hidden;
}

figure {
  width: 100%;
  position:relative;
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

.openHeroFile {
    position: absolute;
    bottom: 4px;
    right: 0;
    height: 40px;
    width: 40px;
    border-radius: 10px 0 0 0;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s;
}

.openHeroFile:hover {
    cursor: pointer;
    filter: invert();
}

.openHeroFile img {
    width: 30px;
    height: 30px;
    min-width: 30px;
}
</style>