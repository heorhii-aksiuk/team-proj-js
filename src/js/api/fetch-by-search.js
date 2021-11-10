import { API_KEY, BASE_URL } from './api-data';

export default async function getFetchBySearch(query) {
  const endPoint = `/search/movie?api_key=${API_KEY}&query=${query}`;
  const url = BASE_URL + endPoint;

  try {
    const apiFetch = await fetch(url);
    const response = await apiFetch.json();
    const results = await response.results;
    return results;
  } catch (error) {
    return console.log(error);
  }
}
