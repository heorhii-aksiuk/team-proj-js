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

minusOneBtnEl.classList.add('content-hidden');
minusTwoBtnEl.classList.add('content-hidden');
firstPageBtnEl.classList.add('content-hidden');

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
    lastPageBtnEl.classList.add('content-hidden');
    lastPageBtnEl.textContent = '';
  } else {
    nextDotsLiEl.classList.remove('content-hidden');
    lastPageBtnEl.classList.remove('content-hidden');
    lastPageBtnEl.textContent = totalPage;
  }

  if (toStartPageLeft < 3) {
    previousDotsLiEl.classList.add('content-hidden');
    firstPageBtnEl.classList.add('content-hidden');
    firstPageBtnEl.textContent = '';
  } else {
    previousDotsLiEl.classList.remove('content-hidden');
    firstPageBtnEl.classList.remove('content-hidden');
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
  minusTwoBtnEl.textContent = currentPage - 2;
  minusOneBtnEl.textContent = currentPage - 1;
  currentBtnEl.textContent = currentPage;
  plusOneBtnEl.textContent = currentPage + 1;
  plusTwoBtnEl.textContent = currentPage + 2;

  if (currentPage >= totalPage) {
    plusTwoBtnEl.classList.add('content-hidden');
    plusOneBtnEl.classList.add('content-hidden');

  } else if (currentPage + 1 === totalPage) {
    plusTwoBtnEl.classList.add('content-hidden');
    plusOneBtnEl.classList.remove('content-hidden');

  } else {
    plusTwoBtnEl.classList.remove('content-hidden');
    plusOneBtnEl.classList.remove('content-hidden');

    if (currentPage === 1) {
      minusOneBtnEl.classList.add('content-hidden');
      minusTwoBtnEl.classList.add('content-hidden');

    } else if (currentPage === 2) {
      minusOneBtnEl.classList.remove('content-hidden');
      minusTwoBtnEl.classList.add('content-hidden');
      
    } else {
      minusOneBtnEl.classList.remove('content-hidden');
      minusTwoBtnEl.classList.remove('content-hidden');
    }
  }

  showOrHideDots();
}