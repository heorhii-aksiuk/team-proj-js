import { API_KEY, BASE_URL } from './api-data';

export async function fetchAllFilms() {
  const URL = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
  const apifetch = await fetch(URL)
  const response = await apifetch.json()
  const { result }= response
  return console.log(response.results[19]); 
}


//const apifetch = await fetch(`${BASE_URL}/?${searchParams}`);
    //const response = await apifetch.json();
  //  const { hits } = response;
   // this._total = response.total;




// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>