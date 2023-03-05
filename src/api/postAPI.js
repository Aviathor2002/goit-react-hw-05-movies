import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76c682e9d9d34956306f5842e1234b80';

export const getTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const getMovieById = id => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const getMoviesCast = id => {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMoviesReviews = id => {
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};

export const getMoviesQuery = query => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
  );
};
