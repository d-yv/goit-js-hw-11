import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

document.querySelector('.form').addEventListener('submit', async e => {
  e.preventDefault();

  let searchText = '';

  const messageData = {
    title: '',
    titleColor: 'red',
    position: 'topRight',
  };
  const userQuerry = e.target.elements['search-text'].value.trim();

  if (userQuerry != '') {
    searchText = userQuerry;
    clearGallery();
    showLoader();
    const images = await getImagesByQuery(searchText);

    if (images.hits.length != 0) {
      createGallery(images);
      hideLoader();
    } else {
      messageData.title =
        'Sorry, there are no images matching your search query. Please try again!';
      iziToast.show(messageData);
      hideLoader();
    }
  } else {
    messageData.title = 'Form field must be filled in !';
    iziToast.show(messageData);
  }
  e.target.reset();
});
