import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38601614-53dd37c61e051eba7000d3146';

const imagesPerPage = 12;
let currentPage = 1;

export async function getImagesBySearchQuery(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&page=${currentPage}&per_page=${imagesPerPage}&image_type=photo&orientation=horizontal`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
