import { renderParamsCard } from '../api/fetch-info';
import filmCard from '../../templates/film-info.hbs';
import { backdrop, modalFrame, mainCardListEl, bodyEl } from '../refs';

let id = 'id';

function renderMovieSearchParam(id) {
  renderParamsCard(id)
    .then(data => {
      console.log('data:', data)
      modalFrame.innerHTML = filmCard(data);
    })
    .catch(() => {});
}

mainCardListEl.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  id = e.target.dataset.id;
  renderMovieSearchParam(id);
  backdrop.classList.remove('hidden');
  bodyEl.classList.add('modal-open');
  window.addEventListener('keydown', modalCloseByEsc);
  backdrop.addEventListener('click', backdropClick);
  closeByButton();
  listenerModalBtn();
});

function modalClose() {
  window.removeEventListener('keydown', modalCloseByEsc);
  backdrop.removeEventListener('click', backdropClick);
  backdrop.classList.add('hidden');
  bodyEl.classList.remove('modal-open');
  modalFrame.innerHTML = '';
}

function backdropClick(e) {
  if (e.currentTarget === e.target) {
    modalClose();
  }
}

function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    modalClose();
  }
}

function closeByButton() {
  const modalCloseBtn = document.querySelector('.close-btn');
  modalCloseBtn.addEventListener('click', modalClose);
}