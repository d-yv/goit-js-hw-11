import axios from 'axios';

export default function getImagesByQuery(query) {
  const link = 'https://pixabay.com/api/';
  const response = axios.get(link, {
    params: {
      key: '50483673-3addba2370166e44fbbdc4d02',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  response
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
