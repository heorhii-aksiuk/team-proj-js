import { fetchAllFilms } from '../api/fetch-all-films';
import {
  mainCardListEl,
  paginationListEl,
  previousPageBtnEl,
  firstPageBtnEl,
  previousDotsLiEl,
  minusTwoBtnEl,
  minusOneBtnEl,
  currentBtnEl,
  plusOneBtnEl,
  plusTwoBtnEl,
  nextDotsLiEl,
  lastPageBtnEl,
  nextPageBtnEl,
} from '../refs';
import filmCard from '../../templates/film-card.hbs';

const homePage = 1;
let totalPage = 1000;
let currentPage = homePage;

if (totalPage > 3) {
  nextDotsLiEl.classList.remove('content-hidden');
  lastPageBtnEl.textContent = totalPage;
} else {
  nextDotsLiEl.classList.add('content-hidden');
  lastPageBtnEl.textContent = '';
}

plusTwoBtnEl.textContent = currentPage + 2;
plusOneBtnEl.textContent = currentPage + 1;

function showOrHideDots() {

  let toStartPageLeft = currentPage - 1;
  let toEndPageLeft = totalPage - currentPage;

  if (toEndPageLeft < 3) {
    nextDotsLiEl.classList.add('content-hidden');
    lastPageBtnEl.textContent = '';
  } else {
    nextDotsLiEl.classList.remove('content-hidden');
    lastPageBtnEl.textContent = totalPage;
  }

  if (toStartPageLeft < 3) {
    previousDotsLiEl.classList.add('content-hidden');
    firstPageBtnEl.textContent = '';
  } else {
    previousDotsLiEl.classList.remove('content-hidden');
    firstPageBtnEl.textContent = '1';
  }
}

function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(data);
}

showAllFilms(homePage);

nextPageBtnEl.addEventListener('click', nextPage)
previousPageBtnEl.addEventListener('click', previousPage);
paginationListEl.addEventListener('click', changePage);

function changePage(event) {
  if (+event.target.textContent > 0)
    currentPage = +event.target.textContent;
  if (currentPage > totalPage) return;
    buttonsContentChange();
    showAllFilms(currentPage);
}

function nextPage() {
  if (currentPage === totalPage) return;
  currentPage += 1;
  buttonsContentChange();
  showAllFilms(currentPage);
}

function previousPage() {
  if (currentPage <= 1) return
  currentPage -= 1;
  buttonsContentChange();
  showAllFilms(currentPage);
}

function buttonsContentChange() {
  if (currentPage > totalPage) {
    currentBtnEl.textContent = currentPage;
    minusOneBtnEl.textContent = currentPage - 1;
    minusTwoBtnEl.textContent = currentPage - 2;
  } else if (currentPage === totalPage) {
    plusTwoBtnEl.textContent = '';
    plusOneBtnEl.textContent = '';
    currentBtnEl.textContent = currentPage;
    minusOneBtnEl.textContent = currentPage - 1;
    minusTwoBtnEl.textContent = currentPage - 2;
    } else if (currentPage + 1 === totalPage) {
    plusTwoBtnEl.textContent = '';
    plusOneBtnEl.textContent = currentPage + 1;
    currentBtnEl.textContent = currentPage;
    minusOneBtnEl.textContent = currentPage - 1;
    minusTwoBtnEl.textContent = currentPage - 2;
  } else {
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

  showOrHideDots();
}