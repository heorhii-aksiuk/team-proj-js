import { modalErrorEl, errorCloseBtnEl, bodyEl } from "../refs";
import { modalClose } from "./modal-film-info";

export function showModalError() {
  modalErrorEl.classList.remove('hidden');
  errorCloseBtnEl.addEventListener('click', closeModalError);
  modalClose();
  bodyEl.classList.add('modal-open');
}

function closeModalError() {
  modalErrorEl.classList.add('hidden');
  errorCloseBtnEl.removeEventListener('click', closeModalError);
  bodyEl.classList.remove('modal-open');
}