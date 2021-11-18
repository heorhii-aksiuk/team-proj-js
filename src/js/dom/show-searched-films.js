import getFetchBySearch from '../api/fetch-by-search';
import { markup } from './show-all-films';
import { showModalError } from './modal-error';
import { searchForm, footerEl, mainCardListEl } from '../refs';
import { paginationHidde } from './pagination';
import filmCard from '../../templates/film-card.hbs';

let query = '';
let page = 1;

searchForm.addEventListener('submit', showSearchedFilms);

const observer = new IntersectionObserver(onEntry, { rootMargin: '300px' });
observer.observe(footerEl);


function showSearchedFilms(e) {
  page = 1;
  e.preventDefault();
  query = e.target.elements.query.value;
  mainCardListEl.innerHTML = '';
  const search = getFetchBySearch(query, page);
  search.then(createMarkup).catch(showModalError);
  paginationHidde();
  localStorage.setItem('searching', 'true');
  searchForm.reset();
}

function onEntry(entries) {
  entries.forEach(entry => {
    if (
      entry.isIntersecting &&
      mainCardListEl.hasChildNodes() &&
      localStorage.getItem('searching') === 'true'
    ) {
      showNextPage();
    }
  });
}

function showNextPage() {
  page += 1;
  const search = getFetchBySearch(query, page);
  search.then(createMarkup);
}

function createMarkup(data) {
  mainCardListEl.insertAdjacentHTML('beforeend', filmCard(markup(data)));
}