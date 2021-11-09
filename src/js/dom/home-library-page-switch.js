import { headerEl, homeBtnEl, libraryBtnEl, searchFormEl, libraryMenuEl } from '../refs';

homeBtnEl.addEventListener('click', showHomePage);
libraryBtnEl.addEventListener('click', showLibraryPage);

function showHomePage() {
  headerEl.classList.add('header-home');
  headerEl.classList.remove('header-library');
  searchFormEl.classList.remove('hidden');
  libraryMenuEl.classList.add('hidden');
  homeBtnEl.parentNode.classList.add('active-page');
  libraryBtnEl.parentNode.classList.remove('active-page');
}

function showLibraryPage() {
  headerEl.classList.add('header-library');
  headerEl.classList.remove('header-home');
  searchFormEl.classList.add('hidden');
  libraryMenuEl.classList.remove('hidden');
  libraryBtnEl.parentNode.classList.add('active-page');
  homeBtnEl.parentNode.classList.remove('active-page');
}
