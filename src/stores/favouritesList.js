import { defineStore } from 'pinia'

export let favouritesList = []

export function addFavourites(heroe) {
    heroe["stars"] = 0;
    if(favouritesList.indexOf(heroe) >= 0) {
        alert(heroe.name + " has already been added to favorites")
        return
    }
    favouritesList.push(heroe);
    alert(heroe.name + " added")
}

export function addStars(heroe, stars) {
    heroe.stars = stars;
}

export const useFavouritesList = defineStore({
    id: 'favourites',
    state: () => ({
        favouritesList: []
    }),
    actions: {
        async fetchFavourites() {
            await fetch('favouritesList')
                .then(data => {
                    this.favouritesList = data
                })
        }
    }
})