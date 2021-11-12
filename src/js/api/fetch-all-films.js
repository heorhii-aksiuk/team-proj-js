import { API_KEY, BASE_URL } from './api-data';

export async function fetchAllFilms(pageNumber) {
  const URLgenres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${pageNumber}`;

  const apifetchGenres = await fetch(URLgenres);
  const responseGenres = await apifetchGenres.json();
  const { genres } = responseGenres;

  const apifetch = await fetch(URL);
  const response = await apifetch.json();
  const { results } = response;
  return {
    films: results,
    genres,
  };
}
