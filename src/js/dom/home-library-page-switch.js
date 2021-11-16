import { headerEl, homeBtnEl, libraryBtnEl } from '../refs';
import { showAllFilms } from './show-all-films'


homeBtnEl.addEventListener('click', showHomePage);
libraryBtnEl.addEventListener('click', showLibraryPage);

function showHomePage() {
  headerEl.classList.add('header-home');
  headerEl.classList.remove('header-library');
  showAllFilms(1)
}

function showLibraryPage() {
  headerEl.classList.add('header-library');
  headerEl.classList.remove('header-home');
}
