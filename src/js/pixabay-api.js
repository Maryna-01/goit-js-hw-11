const API_KEY = '45110069-9beca970d71a92a84c606c316';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
}
fetchImages('nature')
  .then(images => console.log(images))
  .catch(error => console.error(error));