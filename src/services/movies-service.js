import { request, singleRequest } from "./helpers";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "4f0ff036e104f19ed384b069714027d3";
const LANGUAGE = "en-US";

export const getTrendingMovies = async () => {
  return request(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export const getSearchMovies = async (query) => {
  return request(
    `${BASE_URL}search/movie?language=${LANGUAGE}&query=${query}&api_key=${API_KEY}`
  );
};

// export const getMoviesDetails = async (movieId) => {
//   return singleRequest(
//     `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`
//   );
// };

// export const getMoviesCast = async (movieId) => {
//   return singleRequest(
//     `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=${LANGUAGE}`
//   );
// };

// export const getMoviesReviews = (movieId) => {
//   return singleRequest(
//     `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=${LANGUAGE}`
//   );
// };

export const getMoviesInformation = (movieId) => {
  return singleRequest(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=reviews,credits`
  );
};
