import { upBtnEl } from '../refs';

window.onscroll = scrollFunction;

function scrollFunction() {
  upBtnEl.style.display = document.documentElement.scrollTop > 1000 ? 'block' : 'none';
}

upBtnEl.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
