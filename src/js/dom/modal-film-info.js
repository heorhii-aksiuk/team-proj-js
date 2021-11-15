import { renderParamsCard } from '../api/fetch-info';
import filmCard from '../../templates/film-info.hbs';

const modal = document.querySelector('.backdrop');
const modalContainer = document.querySelector('.modal-wrap');
const imagesRef = document.querySelector('.js-collection__list');

let id = 'id';

function renderMovieSearchParam(id) {
  renderParamsCard(id)
    .then(data => {
      modalContainer.innerHTML = filmCard(data);
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
