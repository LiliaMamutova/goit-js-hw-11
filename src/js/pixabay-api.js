import axios from 'axios';


const API_KEY = '55632316-73dae94149f02da0b6b69c83b';

export function getImagesByQuery(query) {
  const searchOptions = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(`https://pixabay.com/api/?${searchOptions}`)
    .then(response =>
      response.data);
}





