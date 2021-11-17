import getFetchBySearch from '../api/fetch-by-search';
import { createMarkup } from './show-all-films';
//import filmCard from '../../templates/film-card';
import { searchForm } from '../refs';

let query = '';

searchForm.addEventListener('submit', showSearchedFilms);

function showSearchedFilms(e) {
  e.preventDefault();
  let page = 1;
  // let totalPages = 1;
  // totalPages = 10;
  
  query = e.target.elements.query.value;
  let search = getFetchBySearch(query, page);
  search.then(createMarkup);
}

export function showSearchedFilmsPagination(page) {
  const search = getFetchBySearch(query, page);
  search.then(createMarkup);
}
