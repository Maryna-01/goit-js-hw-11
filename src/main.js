import { fetchImages } from './js/pixabay-api';
import { renderImages, showAlert, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
let simpleLightbox;

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();
  if (!query) {
    showAlert('Please enter a search query!', 'error');
    return;
  }

  clearGallery();
  loader.style.display = 'block';

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      showAlert(
        'Sorry, there are no images matching your search query. Please try again!',
        'error'
      );
    } else {
      renderImages(images);
      simpleLightbox = new SimpleLightbox('.gallery a');
      simpleLightbox.refresh();
    }
  } catch (error) {
    showAlert('An error occurred while fetching images!', 'error');
  } finally {
    loader.style.display = 'none';
  }
});
