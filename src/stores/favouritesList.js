export let favouritesList= []

export function addFavourites(heroe) {
    heroe["stars"] = 0;
    favouritesList.push(heroe);
    alert(heroe.name + " added")
}

export function addStars(heroe, stars) {
    heroe.stars = stars;
}
