export default function toggleToQueue() {
  let filmsQueueArr = [];
  let localStorageData = localStorage.getItem('filmsQueue');
  if (localStorageData !== null) {
    filmsQueueArr.push(...JSON.parse(localStorageData));
  }
  if (filmsQueueArr.find(el => el.id === selectFilm.id)) {
    filmsQueueArr = filmsQueueArr.filter(el => el.id !== selectFilm.id);
  } else {
    filmsQueueArr.push(selectFilm);
  }
  localStorage.setItem('filmsQueue', JSON.stringify(filmsQueueArr));
}
