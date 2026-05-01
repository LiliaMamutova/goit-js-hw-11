import 'izitoast/dist/css/iziToast.min.css';

import { clearGallery, showLoader } from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';


const container = document.querySelector('.form');

container.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  clearGallery();
  showLoader();

  const inputValue = event.target.elements[0].value

  getImagesByQuery(inputValue);

  event.target.elements[0].value = "";
}



