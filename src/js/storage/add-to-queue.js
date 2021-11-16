import { monitorButtonStatusText } from './button-status-text.js';

let localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));
if (localStorageData === null) {
  localStorage.setItem('filmsQueue', JSON.stringify([]));
}
export function toggleToQueue(id) {
  localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem('filmsQueue', JSON.stringify(localStorageData));
  } else {
    let indexlocalStorageData = localStorageData.indexOf(id);
    if (indexlocalStorageData !== -1) {
      localStorageData.splice(indexlocalStorageData, 1);
    }
    localStorage.setItem('filmsQueue', JSON.stringify(localStorageData));
  }
  monitorButtonStatusText('filmsQueue', id);
}
