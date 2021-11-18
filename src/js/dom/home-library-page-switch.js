import { headerEl, homeBtnEl, libraryBtnEl, libraryWatchedBtn, libraryQueueBtn } from '../refs';
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
  addActiveColorLibraryWBtn();
}
export function addActiveColorLibraryWBtn() {
  libraryWatchedBtn.classList.add('button__active');
}
export function removeActiveColorLibraryWBtn() {
  libraryWatchedBtn.classList.remove('button__active');
}
export function addActiveColorLibraryQBtn() {
  libraryQueueBtn.classList.add('button__active');
}
export function removeActiveColorLibraryQBtn() {
  libraryQueueBtn.classList.remove('button__active');
}