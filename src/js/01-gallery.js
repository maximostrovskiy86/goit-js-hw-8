import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const refs = {
  gallery: document.querySelector('.gallery'),
  modal: document.querySelector('.js-modal'),
  backdrop: document.querySelector('.backdrop'),
  closeModalBtn: document.querySelector('.close-modal-btn'),
};

const createItemGalleryMarkup = galleryItems => {
  return galleryItems
    .map(elem => {
      return `<li class="gallery__item">
                  <a class="gallery__link" href="${elem.original}">
                <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
            </a>
        </li>`;
    })
    .join('');
};

const renderGallery = createItemGalleryMarkup(galleryItems);

refs.gallery.insertAdjacentHTML('beforeend', renderGallery);

// let lightbox = new SimpleLightbox('.gallery a', {
new SimpleLightbox('.gallery a', {
  preloading: true,
  isAnimating: false,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'top',
  captionDelay: 250,
});

// lightbox.on('changed.simplelightbox', function () {
//   alert("RJCZ GHBDTN")
// });
