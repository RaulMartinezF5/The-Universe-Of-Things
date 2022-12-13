import { defineStore } from 'pinia'

export const useHeroesList = defineStore({
    id: 'SAUL',
    state: () => ({
        heroes: []
    }),
    actions: {
        async fetchHeroes () {
            await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then(res => res.json())
            .then(data => {
                this.heroes = data
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                console.log("Heroes cargados")
            })
        },
        getHeroById (id) {
            return this.heroes.find(heroe => heroe.id === id)
        }
    }
})