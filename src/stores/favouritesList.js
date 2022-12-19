export let favouritesList= []

export function addFavourites(heroe) {
    console.log(heroe.id);
    favouritesList.push(heroe);
    printFavourites();
}

function printFavourites() {
    console.log(favouritesList);
}