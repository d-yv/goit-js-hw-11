import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.search-form').addEventListener('submit', e => {
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

  console.log(searchText); // output form text
});
