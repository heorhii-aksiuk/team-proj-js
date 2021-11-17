import { fetchBySearch } from '../api/fetch-by-search';
import { createMarkup } from './show-all-films';

//import filmCard from '../../templates/film-card';
import { searchForm } from '../refs';

let query = '';

searchForm.addEventListener('submit', searchedFilms);

function searchedFilms(e) {
  e.preventDefault();
  let page = 1;
  query = e.target.elements.query.value;
  const search = fetchBySearch(query, page);

  search.then(createMarkup);
  searchForm.reset();
}

export function showSearchedFilms(page) {
  const search = fetchBySearch(query, page);

  search.then(createMarkup);
}

//showSearchedFilms(1);
