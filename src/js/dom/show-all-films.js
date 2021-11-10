import { fetchAllFilms } from '../api/fetch-all-films';
import {
  mainCardListEl,
  previousPageBtnEl,
  firstPageBtnEl,
  minusTwoBtnEl,
  minusOneBtnEl,
  currentBtnEl,
  plusOneBtnEl,
  plusTwoBtnEl,
  lastPageBtnEl,
  nextPageBtnEl,
} from '../refs';
import filmCard from '../../templates/film-card.hbs';

const homePage = 1;
const totalPage = 1000;
let currentPage = homePage;
plusTwoBtnEl.textContent = currentPage + 2;
plusOneBtnEl.textContent = currentPage + 1;

function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(data);
}

showAllFilms(homePage);

nextPageBtnEl.addEventListener('click', nextPage)
previousPageBtnEl.addEventListener('click', previousPage);

function pageChoose(button) {
  button.addEventListener('click', changePage);

  function changePage() {
    currentPage = +button.textContent;
    buttonsTextContentChange();
    showAllFilms(currentPage);
  }
}

pageChoose(plusTwoBtnEl);
pageChoose(plusOneBtnEl);
pageChoose(minusOneBtnEl);
pageChoose(minusTwoBtnEl);

function nextPage() {
  currentPage += 1;
  buttonsTextContentChange();
  showAllFilms(currentPage);
}

function previousPage() {
  if (currentPage <= 1) return
  currentPage -= 1;
  buttonsTextContentChange();
  showAllFilms(currentPage);
}

function buttonsTextContentChange() {
  plusTwoBtnEl.textContent = currentPage + 2;
  plusOneBtnEl.textContent = currentPage + 1;
  currentBtnEl.textContent = currentPage;

  if (currentPage === 1) {
    minusOneBtnEl.textContent = '';
    minusTwoBtnEl.textContent = '';
    
  } else if (currentPage === 2) {
    minusOneBtnEl.textContent = currentPage - 1;
    minusTwoBtnEl.textContent = '';
    
  } else {
    minusOneBtnEl.textContent = currentPage - 1;
    minusTwoBtnEl.textContent = currentPage - 2;
  }
}