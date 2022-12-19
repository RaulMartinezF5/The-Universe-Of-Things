<template>
  <div id="valuationStars">
    <form action="" method="post">
      <p class="clasificacion">
        <input id="radio1" type="radio" name="estrellas" value="5"><label for="radio1">&#9733;</label>
        <input id="radio2" type="radio" name="estrellas" value="4"><label for="radio2">&#9733;</label>
        <input id="radio3" type="radio" name="estrellas" value="3"><label for="radio3">&#9733;</label>
        <input id="radio4" type="radio" name="estrellas" value="2"><label for="radio4">&#9733;</label>
        <input id="radio5" type="radio" name="estrellas" value="1"><label for="radio5">&#9733;</label>
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