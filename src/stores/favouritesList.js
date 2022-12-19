export let favouritesList= []

export function addFavourites(heroe) {
    console.log(heroe.id);
    favouritesList.push(heroe);
    alert(heroe.name + " Añadido");
    printFavourites();
}

function printFavourites() {
    console.log(favouritesList);
}