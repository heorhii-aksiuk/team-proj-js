import { monitorButtonStatusText } from './button-status-text.js';

let localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
if (localStorageData === null) {
  localStorage.setItem('filmsWatched', JSON.stringify([]));
}
export function toggleToWatched(id) {
  localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem('filmsWatched', JSON.stringify(localStorageData));
  } else {
    let indexlocalStorageData = localStorageData.indexOf(id);
    if (indexlocalStorageData !== -1) {
      localStorageData.splice(indexlocalStorageData, 1);
    }
    localStorage.setItem('filmsWatched', JSON.stringify(localStorageData));
  }
  monitorButtonStatusText('filmsWatched', id);
}
