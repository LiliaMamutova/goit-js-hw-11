import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsSelector: 'img',
  captionDelay: 450,
  overlayOpacity: 0.5,
});

export function createGallery(images) {
  const markup = images.map(({ id, webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    ` <li class="gallery-link" data-id="${id}">
         <a class="gallery-image" href="${largeImageURL}" >
            <img class="gallery-img-item" src="${webformatURL}" alt="${tags}" /></a>

            <div class="gallery-info">
              <div class="gallery-info-item">
                <h2 class="title-extra">Likes</h2>
                <p class="title-qty">${likes}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Views</h2>
                <p class="title-qty">${views}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Comments</h2>
                <p class="title-qty">${comments}</p>
              </div>

              <div class="gallery-info-item">
                <h2 class="title-extra">Downloads</h2>
                <p class="title-qty">${downloads}</p>
              </div>
           </div>
      </li>`)
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
}

