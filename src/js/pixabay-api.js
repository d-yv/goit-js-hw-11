import axios from 'axios';

export default function getImagesByQuery(query) {
  const link = 'https://vercel-api-proxy-six-fawn.vercel.app/api/proxy';
  return axios
    .get(link, {
      params: {
        source: 'pixabay',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      return null;
    });
}
