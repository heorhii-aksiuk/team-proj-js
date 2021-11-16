import { renderParamsCard } from '../api/fetch-info';
import filmCard from '../../templates/film-info.hbs';
import { toggleToWatched } from '../storage/add-to-watched.js';
import { toggleToQueue } from '../storage/add-to-queue.js';
import { monitorButtonStatusText } from '../storage/button-status-text.js';

const modal = document.querySelector('.backdrop');
const modalContainer = document.querySelector('.modal-wrap');
const imagesRef = document.querySelector('.js-collection__list');

let id = 'id';

function renderMovieSearchParam(id) {
  renderParamsCard(id)
    .then(data => {
      modalContainer.innerHTML = filmCard(data);

      const addWatched = document.querySelector('.js-addWatched');
      const addQueue = document.querySelector('.js-addQueue');
      monitorButtonStatusText('filmsWatched', data.id);
      monitorButtonStatusText('filmsQueue', data.id);
      addWatched.addEventListener('click', e => toggleToWatched(data.id));

      addQueue.addEventListener('click', e => toggleToQueue(data.id));
    })
    .catch(() => {});
}

imagesRef.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  id = e.target.dataset.id;
  renderMovieSearchParam(id);
  modal.classList.remove('hidden');
  document.body.classList.toggle('modal-open');
});
