import { defineStore } from 'pinia'

export const useHeroesList = defineStore({
    id: 'heroes',
    state: () => ({
        heroesList: []
    }),
    actions: {
        async fetchHeroes () {
            await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then(res => res.json())
            .then(data => {
                this.heroesList = data
            })
            
        },
        getHeroById (id) {
            return this.heroesList.find(heroe => heroe.id === id)
        }
    }
    
})











