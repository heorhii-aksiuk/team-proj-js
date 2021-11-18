import { modalErrorEl } from "../refs";
import { errorCloseBtnEl } from "../refs";
import { modalClose } from "./modal-film-info";

export function showModalError() {
  modalErrorEl.classList.remove('hidden');
  errorCloseBtnEl.addEventListener('click', closeModalError);
  modalClose();
}

function closeModalError() {
  modalErrorEl.classList.add('hidden');
  errorCloseBtnEl.removeEventListener('click', closeModalError);
}