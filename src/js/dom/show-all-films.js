import { fetchAllFilms } from '../api/fetch-all-films';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs';

export function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(data);
}

showAllFilms(1);