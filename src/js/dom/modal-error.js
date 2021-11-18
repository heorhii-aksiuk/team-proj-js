import { modalErrorEl, errorCloseBtnEl, bodyEl } from "../refs";
import { modalClose } from "./modal-film-info";

export function showModalError() {
  modalErrorEl.classList.remove('hidden');
  errorCloseBtnEl.addEventListener('click', closeModalError);
  modalClose();
  window.addEventListener('keydown', modalCloseByEsc)
  modalErrorEl.addEventListener('click', backdropClick);
  bodyEl.classList.add('modal-open');
}

function closeModalError() {
  modalErrorEl.classList.add('hidden');
  window.removeEventListener('keydown', modalCloseByEsc);
  modalErrorEl.removeEventListener('click', backdropClick);
  errorCloseBtnEl.removeEventListener('click', closeModalError);
  bodyEl.classList.remove('modal-open');
}

function backdropClick(e) {
  if (e.currentTarget === e.target) {
    closeModalError();
  }
}
function modalCloseByEsc(e) {
  if (e.code === 'Escape') {
    closeModalError();
  }
}