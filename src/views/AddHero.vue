<script setup>
import HeroFormInputVue from '../components/HeroFormInput.vue';
import HeroFormTextAreaVue from '../components/HeroFormTextArea.vue';
const inputName = [
  "name", 
  "slug", 
  "intelligence", 
  "strength", 
  "speed", 
  "durability", 
  "power",
  "combat", 
  "gender",
  "race",
  "height",
  "weight",
  "eyeColor",
  "hairColor",
  "fullName",
  "alterEgos",
  "aliases",
  "placeOfBirth",
  "firstAppearance",
  "publisher",
  "alignment",
  "occupation",
  "base",
  "groupAffiliation",
  "relatives",
  "xs",
  "sm",
  "md",
  "lg"] 
</script>



<template>
  <main>
    <h2>Add Your Superhero</h2>
    <section>
      <form>
        <div>
        <fieldset>
          <legend>
            Name:
          </legend>
        <HeroFormInputVue :name="inputName[0]" :placeholder="inputName[0]"></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[1]" :placeholder="inputName[1]"></HeroFormInputVue>
        </fieldset>
        <fieldset>
          <legend>
            Power Stats:

          </legend>


          <HeroFormInputVue :name="inputName[2]" :placeholder="inputName[2]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[3]" :placeholder="inputName[3]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[4]" :placeholder="inputName[4]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[5]" :placeholder="inputName[5]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[6]" :placeholder="inputName[6]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[7]" :placeholder="inputName[7]"></HeroFormInputVue>
        </fieldset>
        <fieldset>
          <legend>
            Appearence:
          </legend>
          <HeroFormInputVue :name="inputName[8]" :placeholder="inputName[8]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[9]" :placeholder="inputName[9]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[10]" :placeholder="inputName[10]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[11]" :placeholder="inputName[11]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[12]" :placeholder="inputName[12]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[13]" :placeholder="inputName[13]"></HeroFormInputVue>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>
            Biography:
          </legend>
          <HeroFormInputVue :name="inputName[14]" :placeholder="inputName[14]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[15]" :placeholder="inputName[15]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[16]" :placeholder="inputName[16]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[17]" :placeholder="inputName[17]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[18]" :placeholder="inputName[18]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[19]" :placeholder="inputName[19]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[20]" :placeholder="inputName[20]"></HeroFormInputVue>
        </fieldset>
        <fieldset>
          <legend>
            Work:
          </legend>
          <HeroFormInputVue :name="inputName[21]" :placeholder="inputName[21]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[22]" :placeholder="inputName[22]"></HeroFormInputVue>
        </fieldset>
        <fieldset>
          <legend>
            Connections:
          </legend>
          <HeroFormTextAreaVue :name="inputName[23]" :placeholder="inputName[23]"></HeroFormTextAreaVue>
          <HeroFormTextAreaVue :name="inputName[24]" :placeholder="inputName[24]"></HeroFormTextAreaVue>
        </fieldset>
       </div>
       <div>
        <fieldset>
          <legend>
            Images:
          </legend>
          <HeroFormInputVue :name="inputName[25]" :placeholder="inputName[25]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[26]" :placeholder="inputName[26]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[27]" :placeholder="inputName[27]"></HeroFormInputVue>
          <HeroFormInputVue :name="inputName[28]" :placeholder="inputName[28]"></HeroFormInputVue>

        </fieldset>
        <button>Add Superhero</button>
      </div>
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

form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

div{
  width: 30vw;
  margin: 0 1.5vw;
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

legend {
  margin: 20px 0 5px 0;
  display: block;
}

fieldset {
  display: block;
}
</style>

