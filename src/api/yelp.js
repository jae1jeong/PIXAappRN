import axios from 'axios';
import API_KEY from '../config/API_KEY';

const BASE_URL = 'https://pixabay.com/api/';
export default axios.create({
  baseURL: `${BASE_URL}?key=${API_KEY}&image_type=photo&pretty=true`,
});
