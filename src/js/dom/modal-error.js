import { modalErrorEl } from "../refs";

export function  showModalError() {

  let show = modalErrorEl.classList.remove('hidden');
  let hidde = modalErrorEl.classList.add('hidden')
  
  setTimeout(show, 0);
  setTimeout(hidde, 9000);
}