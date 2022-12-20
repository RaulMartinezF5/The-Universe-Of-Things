export let favouritesList= []

export function addFavourites(heroe) {
    favouritesList.push(heroe);
    alert(heroe.name + " Añadido");

}

export function deleteFavourites(favourite) {
    const index = favouritesList.filter(favourite.id);
    // favouritesList.splice(2);
    console.log(index);
}