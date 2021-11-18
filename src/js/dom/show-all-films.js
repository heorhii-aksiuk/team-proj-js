import { fetchAllFilms } from '../api/fetch-all-films';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs';
import { showModalError } from './modal-error';

export function showAllFilms(page) {
  localStorage.setItem('watchedActive', false)
  localStorage.setItem('queueActive', false)
  localStorage.setItem('searching', false);
  fetchAllFilms(page).then(createMarkup).catch(showModalError);
}

export function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(markup(data));
}

export function markup(data) {
    const { films, genres } = data;
    const filmsWithGenre = films.map(film => ({
      ...film,
      genres: genres.filter(genre => {
        if (typeof film.genre_ids !== 'undefined') return film.genre_ids.includes(genre.id);
      }),
      year: new Date(film.release_date).getFullYear(),
    }));
  return filmsWithGenre;
}

showAllFilms(1);