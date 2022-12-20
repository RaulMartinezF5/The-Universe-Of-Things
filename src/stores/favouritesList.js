export let favouritesList= []

export function addFavourites(heroe) {
    favouritesList.push(heroe);
    alert(heroe.name + " Añadido");

}