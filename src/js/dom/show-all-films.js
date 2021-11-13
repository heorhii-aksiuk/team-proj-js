import { fetchAllFilms } from '../api/fetch-all-films';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs';

export function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  const { films, genres } = data;
  const filmsWithGenre = films.map(film => ({
    ...film,
    genres: genres.filter(genre => film.genre_ids.includes(genre.id)),
  }));
  mainCardListEl.innerHTML = filmCard(filmsWithGenre);
}

showAllFilms(1);