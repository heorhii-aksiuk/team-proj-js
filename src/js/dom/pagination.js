import {
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

import { showAllFilms } from './show-all-films'
// Настройки для отрисовки фильмов по умолчанию
let totalPages = 1000;
// Настройки для стартовой страницы
const homePage = 1;
let lastPage = 1;
let currentPage = homePage;

// Функция, которая будет подключать пагинацию к страничке на которой находится пользователь
/* // В условия проверка на какой страничке находится пользователь
if () {
// функция для пагинации поискового запроса
} else if () {
  // функция для пагинации watched
} else if (){
// функция для пагинации queue
} else {
// функция для пагинации главной странички
  pagination(totalPages, showAllFilms);
} */

// Это вызов функции пагинации для главной странички, принимает количество страниц, и функцию для отрисовки всего в дом
// Функция по умолчанию, после реальизации проверки сверху, удалить от сюда
pagination(totalPages, showAllFilms);
  
// Реализация функционала

function pagination(totalPages, showFilmsFunction) {
  lastPage = totalPages;
  startPaginationSetup();

  paginationListEl.addEventListener('click', changePage);
  previousPageBtnEl.addEventListener('click', previousPage);
  nextPageBtnEl.addEventListener('click', nextPage);

  function changePage(event) {
    if (+event.target.textContent > 0) currentPage = +event.target.textContent;
    if (currentPage > lastPage) return;
    buttonsShow();
    showFilmsFunction(currentPage);
  }

  function nextPage() {
    if (currentPage === lastPage) return;
    currentPage += 1;
    buttonsShow();
    showFilmsFunction(currentPage);
  }

  function previousPage() {
    if (currentPage <= 1) return;
    currentPage -= 1;
    buttonsShow();
    showFilmsFunction(currentPage);
  }
}

function startPaginationSetup() {
  firstPageBtnEl.textContent = homePage;
  lastPageBtnEl.textContent = lastPage;
  changePageNumbers();

  firstPageBtnEl.classList.add('content-hidden');
  minusOneBtnEl.classList.add('content-hidden');
  minusTwoBtnEl.classList.add('content-hidden');
  nextDotsLiEl.classList.add('content-hidden');
  lastPageBtnEl.classList.add('content-hidden');

  if (lastPage <= 1) {
    plusOneBtnEl.classList.add('content-hidden');
  } else if (lastPage === 2) {
    plusTwoBtnEl.classList.add('content-hidden');
  } else if (lastPage === 3) {
    nextDotsLiEl.classList.add('content-hidden');
    lastPageBtnEl.classList.add('content-hidden');
  } else {
    nextDotsLiEl.classList.remove('content-hidden');
    lastPageBtnEl.classList.remove('content-hidden');
  }
}

function showFirstAndLastPages() {
  let toLastPageLeft = lastPage - currentPage;

  if (toLastPageLeft < 3) {
    nextDotsLiEl.classList.add('content-hidden');
    lastPageBtnEl.classList.add('content-hidden');
  } else {
    nextDotsLiEl.classList.remove('content-hidden');
    lastPageBtnEl.classList.remove('content-hidden');
  }

  if (currentPage < 4) {
    previousDotsLiEl.classList.add('content-hidden');
    firstPageBtnEl.classList.add('content-hidden');
  } else {
    previousDotsLiEl.classList.remove('content-hidden');
    firstPageBtnEl.classList.remove('content-hidden');
  }
}

function buttonsShow() {
  changePageNumbers();
  showFirstAndLastPages();
  hiddeMinusButtons();

  if (currentPage >= lastPage) {
    plusTwoBtnEl.classList.add('content-hidden');
    plusOneBtnEl.classList.add('content-hidden');
  } else if (currentPage === lastPage - 1) {
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
}

function changePageNumbers() {
  minusTwoBtnEl.textContent = currentPage - 2;
  minusOneBtnEl.textContent = currentPage - 1;
  currentBtnEl.textContent = currentPage;
  plusOneBtnEl.textContent = currentPage + 1;
  plusTwoBtnEl.textContent = currentPage + 2;
}

function hiddeMinusButtons() {
  if (minusTwoBtnEl.textContent < 1) minusTwoBtnEl.classList.add('content-hidden');
  if (minusOneBtnEl.textContent < 1) minusOneBtnEl.classList.add('content-hidden');
  if (minusTwoBtnEl.textContent > 0) minusTwoBtnEl.classList.remove('content-hidden');
  if (minusOneBtnEl.textContent > 0) minusOneBtnEl.classList.remove('content-hidden');
}