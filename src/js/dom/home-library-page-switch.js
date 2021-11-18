import { headerEl, homeBtnEl, libraryBtnEl, libraryWatchedBtn, libraryQueueBtn } from '../refs';
import { showAllFilms } from './show-all-films';
import { paginationHidde, paginationShow } from './pagination'



homeBtnEl.addEventListener('click', showHomePage);
libraryBtnEl.addEventListener('click', showLibraryPage);

function showHomePage() {
  headerEl.classList.add('header-home');
  headerEl.classList.remove('header-library');
  paginationShow()
  showAllFilms(1)
}

function showLibraryPage() {
  headerEl.classList.add('header-library');
  headerEl.classList.remove('header-home');
  localStorage.setItem('watchedActive', true)
  localStorage.setItem('queueActive', false)
  addActiveColorLibraryWBtn();
  removeActiveColorLibraryQBtn()
  paginationHidde();
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