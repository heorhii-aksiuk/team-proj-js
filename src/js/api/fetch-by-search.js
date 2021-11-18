import { API_KEY, BASE_URL } from './api-data';
import { showModalError } from '../dom/modal-error';

export default async function getFetchBySearch(query) {
  const endPoint = `/search/movie?api_key=${API_KEY}&query=${query}&page=2`;
  const url = BASE_URL + endPoint;
  const URLgenres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

  try {
    const apifetchGenres = await fetch(URLgenres);
    const responseGenres = await apifetchGenres.json();
    const { genres } = responseGenres;

    const apiFetch = await fetch(url);
    const response = await apiFetch.json();
    const { results } = response;
    return {
      films: results,
      genres,
    };
  } catch (error) {
    return showModalError()
  }
}
