import { API_KEY, BASE_URL } from './api-data';

export default async function getFetchBySearch(query) {
  const endPoint = `/search/movie?api_key=${API_KEY}&query=${query}`;
  const url = BASE_URL + endPoint;

  try {
    const apiFetch = await fetch(url);
    console.log(apiFetch);
    const response = await apiFetch.json();
    console.log(response);
    const results = await response.results;
    console.log(results);
    return results;
  } catch (error) {
    return console.log(error);
  }
}
