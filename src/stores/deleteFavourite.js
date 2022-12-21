import {favouritesList} from '../stores/favouritesList'

export function deleteFavourite(favourite) {
    let index = favouritesList.indexOf(favourite);
    favouritesList.splice(index, 1);
    console.log(favouritesList);
}
