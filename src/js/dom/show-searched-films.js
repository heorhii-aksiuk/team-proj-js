import { fetchBySearch } from '../api/fetch-by-search';
import { createMarkup } from './show-all-films';

//import filmCard from '../../templates/film-card';
import { searchForm } from '../refs';

export function showSearchedFilms(page) {
  searchForm.addEventListener('submit', searchedFilms);

  function searchedFilms(e) {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const search = fetchBySearch(query, page);

    search.then(createMarkup);
    searchForm.reset();
  }
}
showSearchedFilms(1);
