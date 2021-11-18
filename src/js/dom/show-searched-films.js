import getFetchBySearch from '../api/fetch-by-search';
import { createMarkup } from './show-all-films';
import { showModalError } from './modal-error';
import { searchForm } from '../refs';

searchForm.addEventListener('submit', showSearchedFilms);

function showSearchedFilms(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  const search = getFetchBySearch(query);
  search.then(createMarkup).catch(showModalError);
  searchForm.reset();
}
