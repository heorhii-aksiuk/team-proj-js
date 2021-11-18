import { renderParamsCard } from '../api/fetch-info';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs';
import { showModalError } from './modal-error';
import { addActiveColorLibraryQBtn, removeActiveColorLibraryWBtn } from '../dom/home-library-page-switch.js';

const libraryQueueBtn = document.querySelector('.library-queue-btn');
libraryQueueBtn.addEventListener('click', e => {
  localStorage.setItem('queueActive', true)
  localStorage.setItem('watchedActive', false)
  renderQueueFilms();
  addActiveColorLibraryQBtn();
  removeActiveColorLibraryWBtn();
});

export function renderQueueFilms() {
  let localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));
  if (localStorageData === null || localStorageData.length === 0) {
    mainCardListEl.innerHTML = '<h1>Please, add queue films</h1>';
  } else {
    mainCardListEl.innerHTML = ''
    localStorageData.forEach(e => {
      renderParamsCard(e)
        .then(data => {
          const dataObj = { ...data, year: new Date(data.release_date).getFullYear() };
          mainCardListEl.insertAdjacentHTML('beforeend', filmCard([dataObj]));
        })
        .catch(showModalError);
    });

  }
}