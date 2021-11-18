import { monitorButtonStatusText } from './button-status-text.js';
import {renderWatchedFilms} from '../dom/show-watched-films'

let localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
if (localStorageData === null) {
  localStorage.setItem('filmsWatched', JSON.stringify([]));
}
export function toggleToWatched(id) {
  localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem('filmsWatched', JSON.stringify(localStorageData));
    if (localStorage.getItem('watchedActive') === 'true') {
      renderWatchedFilms();
    }
  } else {
    let indexlocalStorageData = localStorageData.indexOf(id);
    if (indexlocalStorageData !== -1) {
      localStorageData.splice(indexlocalStorageData, 1);
    }
    localStorage.setItem('filmsWatched', JSON.stringify(localStorageData));
    if (localStorage.getItem('watchedActive') === 'true') {
      renderWatchedFilms();
    }
  }
  monitorButtonStatusText('filmsWatched', id);
}
