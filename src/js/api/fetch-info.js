import { showModalError } from "../dom/modal-error";

const API_KEY = 'c686fd0cacddd11fd41af6fdd62727e4';
const BASE_URL = 'https://api.themoviedb.org/3';
const ID_URL = `${BASE_URL}/movie/`;

export async function renderParamsCard(id) {
  const REQUEST_ADRESS = `${ID_URL}${id}?api_key=${API_KEY}&language=en-US`;
  
  try {
    const APIfetch = await fetch(REQUEST_ADRESS);
    if (+APIfetch.status === 404) throw Error(error);
    
    const response = await APIfetch.json();
    return response;
  } catch (error) {
    showModalError()
  }
}
