
let localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
if (localStorageData === null) {
  localStorage.setItem('filmsWatched', JSON.stringify([]));
}
export function toggleToWatched(id) {
    localStorageData = JSON.parse(localStorage.getItem('filmsWatched'));
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem('filmsWatched', JSON.stringify(localStorageData));
  }
}
