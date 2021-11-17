import { fetchAllFilms } from '../api/fetch-all-films';
import { preloader, percentDisplay } from '../refs';

let imagesLoadedCount = 0;
let imagesTotalCount;

let page = 1;

fetchAllFilms(page).then(forArrayImg);

function forArrayImg(data) {
  const images = data.films;
  imagesTotalCount = images.length;

  for (let i = 0; i < imagesTotalCount; i++) {
    const imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].poster_path;
  }
}

function imageLoaded() {
  imagesLoadedCount++;
  percentDisplay.innerHTML = Math.round((100 / imagesTotalCount) * imagesLoadedCount) + '%';

  if (imagesLoadedCount >= imagesTotalCount) {
    setTimeout(() => {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }, 500);
  }
}

preloader.classList.add('done');  