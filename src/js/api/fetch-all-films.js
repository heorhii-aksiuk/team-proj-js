import { API_KEY, BASE_URL } from './api-data';
import { showModalError } from '../dom/modal-error';

export async function fetchAllFilms(pageNumber) {
  const URLgenres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${pageNumber}`;
  const error = 'Oops, something went wrong.';

  try {
    const APIfetchGenres = await fetch(URLgenres);
    const responseGenres = await APIfetchGenres.json();
    const { genres } = responseGenres;
    
    const APIfetch = await fetch(URL);
    if (+APIfetch.status === 404) throw Error(error);

    const response = await APIfetch.json();
    const { results } = response;

    return {
      films: results,
      genres,
    };

  } catch (error) {
    showModalError()
  };
}
