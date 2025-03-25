import axios from 'axios';

const BASE_URL = 'http://skunkworks.ignitesol.com:8000/books';

export const fetchBooks = async (category, search, page = 1) => {
  let url = `${BASE_URL}?page=${page}&mime_type=image`; 

  if (search) url = `${BASE_URL}?&search=${search}`;
  if (category) url += `&topic=${category}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};