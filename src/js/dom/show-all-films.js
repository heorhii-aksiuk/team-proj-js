import { fetchAllFilms } from '../api/fetch-all-films';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs';

const homePage = 1;

function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  const {films, genres} = data;
  console.log(data);
  const filmsWithGenre = films.map(film => ({
    ...film,
    genres: genres.filter(genre => film.genre_ids.includes(genre.id))
  }));
  console.log(filmsWithGenre);
  mainCardListEl.innerHTML = filmCard(filmsWithGenre);
  
}

showAllFilms(homePage);
