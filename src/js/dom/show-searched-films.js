import getFetchBySearch from '../api/fetch-by-search';
import filmCard from '../../templates/film-card';
import { mainCardListEl, searchForm } from '../refs';

searchForm.addEventListener('submit', showSearchedFilms);

function showSearchedFilms(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  console.log(query);
  const search = getFetchBySearch(query);
  console.log(search);
  search.then(arr => mainCardListEl.insertAdjacentHTML('afterbegin', filmCard(arr)));
}
