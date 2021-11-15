const API_KEY = 'c686fd0cacddd11fd41af6fdd62727e4';
const BASE_URL = 'https://api.themoviedb.org/3';
const ID_URL = `${BASE_URL}/movie/`;

export function renderParamsCard(id) {
  const REQUEST_ADRESS = `${ID_URL}${id}?api_key=${API_KEY}&language=en-US`;
  return fetch(REQUEST_ADRESS)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(error => error);
}