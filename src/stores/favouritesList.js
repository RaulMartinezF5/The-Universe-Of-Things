
import { defineStore } from 'pinia'

export let favouritesList=[];

export function addFavourites(heroe) {
        favouritesList.push(heroe)
        alert(heroe.name + " Añadido")
    console.log(favouritesList);
}

export const useFavouritesList = defineStore({
    id: 'favourites',
    state: () => ({
        favouritesList: []
    }),
    actions: {
        async fetchFavourites () {
            await fetch('favouritesList')
            .then(data => {
                this.favouritesList = data
            })        
        }
    }
    
})