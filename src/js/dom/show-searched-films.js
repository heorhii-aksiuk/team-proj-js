import getFetchBySearch from '../api/fetch-by-search';
import { createMarkup } from './show-all-films';

//import filmCard from '../../templates/film-card';
import { searchForm } from '../refs';

searchForm.addEventListener('submit', showSearchedFilms);

function showSearchedFilms(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  const search = getFetchBySearch(query);
  search.then(createMarkup);
  searchForm.reset();
}
