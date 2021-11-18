import { monitorButtonStatusText } from './button-status-text.js';
import {renderQueueFilms} from '../dom/show-queue-films'

let localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));
if (localStorageData === null) {
  localStorage.setItem('filmsQueue', JSON.stringify([]));
}
export function toggleToQueue(id) {
  localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem('filmsQueue', JSON.stringify(localStorageData));
    if (localStorage.getItem('queueActive') === 'true') {
      renderQueueFilms();
    }
  } else {
    let indexlocalStorageData = localStorageData.indexOf(id);
    if (indexlocalStorageData !== -1) {
      localStorageData.splice(indexlocalStorageData, 1);
    }
    localStorage.setItem('filmsQueue', JSON.stringify(localStorageData));
    if (localStorage.getItem('queueActive') === 'true') {
      renderQueueFilms();
    }
  }
  monitorButtonStatusText('filmsQueue', id);
}
