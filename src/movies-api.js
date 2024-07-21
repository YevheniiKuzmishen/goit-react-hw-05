import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmY5YzE3OTJhODMyOTI2YTc3OWI5YjVlOThmZGIwZCIsIm5iZiI6MTcyMTU5NjU5OS4yNjkxNzIsInN1YiI6IjY2OTkyY2JmMWIyM2M5MWYyYmE1OGFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vhWNMsCfvLSc8e19i93MdVlJU5VNIXoi0XodtKoL48U",
  },
};

export const getMovie = async () => {
  const response = await axios.get("/trending/movie/day", options);

  return response.data.results;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);

  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);

  return response.data;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);

  return response.data.results;
};
