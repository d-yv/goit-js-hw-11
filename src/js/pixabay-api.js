import axios from 'axios';

export default async function getImagesByQuery(query) {
  const link = 'https://pixabay.com/api/';
  try {
    const response = await axios.get(link, {
      params: {
        key: '50483673-3addba2370166e44fbbdc4d02',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    console.log('api', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
