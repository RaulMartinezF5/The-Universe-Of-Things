<script setup>
import HeroFormInputVue from '../components/HeroFormInput.vue';
const inputName=["name","slug","intelligence","strength","speed", "durability","power","combat","gender",
"race",
"height",
"weight",
"eyeColor",
"hairColor"] 
</script>



<template>
  <main>
    <h2>Add Your Superhero</h2>
    <section>
     <form>
        <HeroFormInputVue
        :name="inputName[0]"
        :placeholder="inputName[0]"
        ></HeroFormInputVue>
        <HeroFormInputVue
        :name="inputName[1]"
        :placeholder="inputName[1]"
        ></HeroFormInputVue>
        <fieldset>
          <legend>
            Power Stats:

         </legend>

        
        <HeroFormInputVue :name="inputName[2]" :placeholder="inputName[2]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[3]" :placeholder="inputName[3]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[4]" :placeholder="inputName[4]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[5]" :placeholder="inputName[5]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[6]" :placeholder="inputName[6]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[7]" :placeholder="inputName[7]"
></HeroFormInputVue>
      </fieldset>
<fieldset>
  <legend>
    Appearence:
  </legend>
  <HeroFormInputVue :name="inputName[8]"         :placeholder="inputName[8]"
 ></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[9]"   :placeholder="inputName[9]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[10]"   :placeholder="inputName[10]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[11]"    :placeholder="inputName[11]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[12]"   :placeholder="inputName[12]"
></HeroFormInputVue>
        <HeroFormInputVue :name="inputName[13]"   :placeholder="inputName[13]"
></HeroFormInputVue>
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


"id": 1,
  "name": "A-Bomb",
  "slug": "1-a-bomb",
  "powerstats": {
    "intelligence": 38,
    "strength": 100,
    "speed": 17,
    "durability": 80,
    "power": 24,
    "combat": 64
  },
  "appearance": {
    "gender": "Male",
    "race": "Human",
    "height": [
      "6'8",
      "203 cm"
    ],
    "weight": [
      "980 lb",
      "441 kg"
      "eyeColor": "Yellow",
    "hairColor": "No Hair"
  },
  "biography": {
    "fullName": "Richard Milhouse Jones",
    "alterEgos": "No alter egos found.",
    "aliases": [
      "Rick Jones"
    ],
    "placeOfBirth": "Scarsdale, Arizona",
    "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
    "publisher": "Marvel Comics",
    "alignment": "good"
  },
  "work": {
    "occupation": "Musician, adventurer, author; formerly talk show host",
    "base": "-"
  },
  "connections": {
    "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
    "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
  },
  "images": {
    "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
    "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
    "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
    "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
  }
}