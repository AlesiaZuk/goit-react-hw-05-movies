const API_KEY = '4bb1009f708601d0556c1a3efb1168d0';
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE_ENDPOINT = 'movie';
const TRENDING_ENDPOINT = 'trending/movie/day';
const SEARCH_ENDPOINT = 'search/movie';
const CAST_ENDPOINT = '/credits';
const REVIEWS_ENDPOINT = '/reviews';

export function fetchTrendingMovies() {
  return fetch(
    `${BASE_URL}/${TRENDING_ENDPOINT}?page=${1}&api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found'));
  });
}

export function fetchMoviesById(movieId) {
  return fetch(
    `${BASE_URL}/${MOVIE_ENDPOINT}/${movieId}?api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found'));
  });
}

export function fetchMoviesSearch(searchQuery) {
  return fetch(
    `${BASE_URL}/${SEARCH_ENDPOINT}/?query=${searchQuery}&api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No movies with keyword ${searchQuery}`));
  });
}

export function fetchMovieCast(movieId) {
  return fetch(
    `${BASE_URL}/${MOVIE_ENDPOINT}/${movieId}/${CAST_ENDPOINT}?api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found'));
  });
}

export function fetchMovieReviews(movieId) {
  return fetch(
    `${BASE_URL}/${MOVIE_ENDPOINT}/${movieId}/${REVIEWS_ENDPOINT}?api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found'));
  });
}
