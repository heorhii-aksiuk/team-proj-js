import { modalErrorEl } from "../refs";
import { errorCloseBtnEl } from "../refs";

export function showModalError() {
  modalErrorEl.classList.remove('hidden');
  errorCloseBtnEl.addEventListener('click', closeModalError);
}

function closeModalError() {
  modalErrorEl.classList.add('hidden');
  errorCloseBtnEl.removeEventListener('click', closeModalError);
}