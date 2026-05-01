import iziToast from 'izitoast';
import axios from 'axios';

import { createGallery, hideLoader} from './render-functions.js';


const API_KEY = '55632316-73dae94149f02da0b6b69c83b';

export function getImagesByQuery(query) {
  const searchOptions = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  axios.get(`https://pixabay.com/api/?${searchOptions}`)
    .then((response) => {
      console.log(response.data);
      if (response.data.hits.length > 0) {
        createGallery(response.data.hits);
      } else {
        showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
      }

    })
    .catch((error) => {
      console.log(error);
      showErrorMessage('Something bad happened, try again');
    })
    .finally(() => {
      hideLoader();
    });
}

function showErrorMessage(errorMsg) {
  return iziToast.show({
    message: errorMsg,
    color: 'red',
    position: 'topRight',
  });
}



