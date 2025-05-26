import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import axios from 'axios';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import createGallery from './js/render-functions';

document.querySelector('.search-form').addEventListener('submit', async e => {
  e.preventDefault();
  let searchText = '';

  const messageData = {
    title: 'Form field must be filled in !',
    titleColor: 'red',
    position: 'topRight',
  };

  if (e.target.elements['search-text'].value.trim() != '') {
    searchText = e.target.elements['search-text'].value.trim();
  } else {
    iziToast.show(messageData);
  }
  e.target.reset();

  console.log(searchText);

  const images = await getImagesByQuery(searchText);
  console.log('main', images);

  createGallery(images);
});
