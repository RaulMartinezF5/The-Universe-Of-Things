<script setup>
function goInvisible() {
  const visor = document.getElementById("visor");
  visor.classList.add("invisible")
}

</script>
<template>
  <div id="visor" class="invisible">
    <div id="fileDetails">
      <button @click="goInvisible">X</button>
      <p>Patata</p>
    </div>

  </div>
</template>
  
<style scope>
#visor {
  width: 100%;
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

#visor button {
  position: absolute;
  top: 30px;
  right: 30px;
}

.invisible {
  display: none;
}
</style>