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


function nextPage() {
  currentPage += 1;
  plusTwoBtnEl.textContent = currentPage + 2;
  plusOneBtnEl.textContent = currentPage + 1;
  currentBtnEl.textContent = currentPage;
  minusOneBtnEl.textContent = currentPage - 1;
  if (currentPage > 2) minusTwoBtnEl.textContent = currentPage - 2;
  showAllFilms(currentPage);
}

function previousPage() {
  currentPage -= 1;
  plusTwoBtnEl.textContent = currentPage + 2;
  plusOneBtnEl.textContent = currentPage + 1;
  currentBtnEl.textContent = currentPage;
  
  if (currentPage < 2) {
    minusOneBtnEl.textContent = '';
  } else {
    minusOneBtnEl.textContent = currentPage - 1;
  }
  
  if (currentPage < 3) {
    minusTwoBtnEl.textContent = '';
  } else {
    minusTwoBtnEl.textContent = currentPage - 2;
  }

  showAllFilms(currentPage);
}