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

function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

export function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(data);
}

showAllFilms(homePage);
