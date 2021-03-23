import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0758483bbf141f2377e75ad4723d5ab5';

async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    );
    const data = await response.data;
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function fetchSearchedMovies(searchQuery) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`,
    );
    const data = await response.data;
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}

async function fetchMovie(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchCast(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default {
  fetchTrendingMovies,
  fetchSearchedMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
};
