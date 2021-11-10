import { fetchAllFilms } from '../api/fetch-all-films';
import { mainCardListEl } from '../refs';
import filmCard from '../../templates/film-card.hbs'

const homePage = 1;

function showAllFilms(page) {
  fetchAllFilms(page).then(createMarkup);
}

function createMarkup(data) {
  mainCardListEl.innerHTML = filmCard(data)
}

showAllFilms(homePage);

//FT-02,13 By clicking on the logo/"Home" btn, the main page is render.
function refreshPage() {
  document.location.reload();

  logo.addEventListener('click', refreshPage);
  homebtn.addEventListener('click', refreshPage);
}

// const startPage = showAllFilms(homePage)
// btnGoHome.addEventListener('click', startPage)

// const startPage = showAllFilms(homePage)

// logo.addEventListener('click', startPage)