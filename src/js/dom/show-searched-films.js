import getFetchBySearch from '../api/fetch-by-search';
import filmCard from '../../templates/film-card';

const searchForm = document.getElementById('search-form');
const collectionList = document.querySelector('.collection__list');

searchForm.addEventListener('submit', showSearchedFilms);

function showSearchedFilms(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  console.log(query);
  const search = getFetchBySearch(query);
  console.log(search);
  search.then(arr => collectionList.insertAdjacentHTML('afterbegin', filmCard(arr)));
}
