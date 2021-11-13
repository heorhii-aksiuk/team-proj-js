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

const pages = 3;
const homePage = 1;
let totalPage = 1;
let currentPage = homePage;

function pagination(totalPageInFetch) {
  totalPage = totalPageInFetch;
  return totalPage;
}

pagination(pages);

function startPaginationSetup() {
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
  
  if (totalPage < 2) plusOneBtnEl.classList.add('content-hidden');
  if (totalPage < 3) plusTwoBtnEl.classList.add('content-hidden');
}

startPaginationSetup()

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
  
  if (minusOneBtnEl.textContent < 1) minusOneBtnEl.classList.add('content-hidden');
  if (minusTwoBtnEl.textContent < 1) minusTwoBtnEl.classList.add('content-hidden');
  if (minusOneBtnEl.textContent > 0) minusOneBtnEl.classList.remove('content-hidden');
  if (minusTwoBtnEl.textContent > 0) minusTwoBtnEl.classList.remove('content-hidden');
  
}

nextPageBtnEl.addEventListener('click', nextPage)
previousPageBtnEl.addEventListener('click', previousPage);
paginationListEl.addEventListener('click', changePage);

function changePage(event) {
  if (+event.target.textContent > 0)
  currentPage = +event.target.textContent;
  if (currentPage > totalPage) return;
  buttonsShow();
  showAllFilms(currentPage);
}

function nextPage() {
  if (currentPage === totalPage) return;
  currentPage += 1;
  buttonsShow();
  showAllFilms(currentPage);
}

function previousPage() {
  if (currentPage <= 1) return
  currentPage -= 1;
  buttonsShow();
  showAllFilms(currentPage);
}

function buttonsShow() {
  changePageNumbers();
  
  if (currentPage >= totalPage) {
    plusTwoBtnEl.classList.add('content-hidden');
    plusOneBtnEl.classList.add('content-hidden');
    minusOneBtnEl.classList.remove('content-hidden');
    minusTwoBtnEl.classList.remove('content-hidden');
    
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

function changePageNumbers() {
  minusTwoBtnEl.textContent = currentPage - 2;
  minusOneBtnEl.textContent = currentPage - 1;
  currentBtnEl.textContent = currentPage;
  plusOneBtnEl.textContent = currentPage + 1;
  plusTwoBtnEl.textContent = currentPage + 2;
}


function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(data);
}

showAllFilms(homePage);