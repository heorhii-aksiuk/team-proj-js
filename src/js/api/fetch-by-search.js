import { API_KEY, BASE_URL } from './api-data';

export default async function getFetchBySearch(query, page) {
  const endPoint = `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  const url = BASE_URL + endPoint;
  const URLgenres = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

  try {
    const apifetchGenres = await fetch(URLgenres);
    const responseGenres = await apifetchGenres.json();
    const { genres } = responseGenres;

    const apiFetch = await fetch(url);
    const response = await apiFetch.json();
    const { results, total_pages } = response;
    // console.log(response.total_pages);
    return {
      films: results,
      genres,
      totalPages: total_pages,
    };
  } catch (error) {
    return console.log(error);
  }
}
