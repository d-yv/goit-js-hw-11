import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function createGallery(images) {
  console.log('images', images);

  const gallery = document.querySelector('.gallery');

  const imagesArr = images.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    <a class="gallery-link" href=${largeImageURL}>
      <img
        class="gallery-image"
        src=${webformatURL}
        alt=${tags}
      />
    </a>
  </li>`
    )
    .join('');

  gallery.innerHTML = imagesArr;

  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt',
  });
}
