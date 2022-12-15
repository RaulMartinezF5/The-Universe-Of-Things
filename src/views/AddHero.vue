<script setup>
import HeroFormInputVue from '../components/HeroFormInput.vue';
</script>


<template>
  <main>
    <h2>Add Your Superhero</h2>
    <section>
     <form>
      <fieldset>
        <HeroFormInputVue></HeroFormInputVue>
      </fieldset>
     </form> 
    </section>
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

</style>
