let localStorageData = JSON.parse(localStorage.getItem('filmsQueue'));
if (localStorageData === null) {
  localStorage.setItem('filmsQueue', JSON.stringify([]));
}
export function toggleToQueue(id) {
  if (!localStorageData.includes(id)) {
    localStorageData.push(id);
    localStorage.setItem('filmsQueue', JSON.stringify(localStorageData));
  }
}
