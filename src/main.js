import 'izitoast/dist/css/iziToast.min.css';

import { createGallery, hideLoader, showLoader } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';


const container = document.querySelector('.form');

container.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputValue = event.target.elements[0].value.trim();

  if (!inputValue) {
    showErrorMessage('Please enter a search word');
    return;
  }

  showLoader();

  getImagesByQuery(inputValue)
    .then((data) => {
      if (data.hits.length > 0) {
        createGallery(data.hits);
      } else {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
      }
    })
    .catch((error) => {
      showErrorMessage('Something bad happened, try again');
    })
    .finally(() => {
      hideLoader();
    });

  event.target.elements[0].value = '';
}

function showErrorMessage(errorMsg) {
  return iziToast.show({
    message: errorMsg,
    color: 'red',
    position: 'topRight',
  });
}
