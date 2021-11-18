export function monitorButtonStatusText(keyStorage, id) {
  const addWatched = document.querySelector('.js-addWatched');
  const addQueue = document.querySelector('.js-addQueue');

  let localStorageDataWatched = JSON.parse(localStorage.getItem('filmsWatched'));
  let localStorageDataQueue = JSON.parse(localStorage.getItem('filmsQueue'));

  const filmFromWatched = localStorageDataWatched.includes(id);
  const filmFromQueue = localStorageDataQueue.includes(id);

  switch (keyStorage) {
    case 'filmsWatched':
      addWatched.innerText = filmFromWatched ? 'Delete from watched' : 'Add to watched';
      addWatched.style.backgroundColor = filmFromWatched ? '#FF6B08' : '';
      addWatched.style.color = filmFromWatched ? 'white' : '';
      addWatched.style.borderColor = filmFromWatched ? '#FF6B08' : '';
      break;
    case 'filmsQueue':
      addQueue.innerText = filmFromQueue ? 'Delete from queue' : 'Add to queue';
      addQueue.style.backgroundColor = filmFromQueue ? '#FF6B08' : '';
      addQueue.style.color = filmFromQueue ? 'white' : '';
      addQueue.style.borderColor = filmFromQueue ? '#FF6B08' : '';
      break;
  }
}
