import { fetchAllFilms } from '../api/fetch-all-films';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs';
import { showModalError } from './modal-error';

const homePage = 1;

export function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup).catch(showModalError);
}

export function createMarkup(data) {
  const { films, genres } = data;
  const filmsWithGenre = films.map(film => ({
    ...film,
    genres: genres.filter(genre => {
      if (typeof film.genre_ids !== 'undefined') return film.genre_ids.includes(genre.id);
    }),
    year: new Date(film.release_date).getFullYear()
  }));
  mainCardListEl.innerHTML = filmCard(filmsWithGenre);
}

showAllFilms(homePage);