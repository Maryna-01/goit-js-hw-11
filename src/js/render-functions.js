import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p class="info-item"><strong>Likes:</strong> ${image.likes}</p>
        <p class="info-item"><strong>Views:</strong> ${image.views}</p>
        <p class="info-item"><strong>Comments:</strong> ${image.comments}</p>
        <p class="info-item"><strong>Downloads:</strong> ${image.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');
}

export function showAlert(message, type = 'info') {
  iziToast[type]({
    title: message,
    position: 'topRight',
  });
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

