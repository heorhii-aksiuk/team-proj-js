import { API_KEY, BASE_URL } from './api-data';

export async function fetchAllFilms(pageNumber) {
  const URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${pageNumber}`;

  const apifetch = await fetch(URL)
  const response = await apifetch.json()
  const { results } = response;
  return await results;
}
