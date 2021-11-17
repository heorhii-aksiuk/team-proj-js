import { API_KEY, BASE_URL } from './api-data';

export async function fetchBySearch(query, pageNumber) {
  const endPoint = `/search/movie?api_key=${API_KEY}&query=${query}&page=${pageNumber}`;
  const url = BASE_URL + endPoint;
  const URLgenres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

  try {
    const apifetchGenres = await fetch(URLgenres);
    const responseGenres = await apifetchGenres.json();
    const { genres } = responseGenres;

    const apiFetch = await fetch(url);
    const response = await apiFetch.json();
    const { results, total_pages } = response;
    //console.log(response);
    return {
      films: results,
      totalPages: total_pages,
      genres,
    };
  } catch (error) {
    return console.log(error);
  }
}
