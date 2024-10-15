import { apiKey, apiToken } from "./env.js";

const getData = async (url, callback) => {
  const get = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiToken}`
    }
  };

  try {
    const response = await fetch(url, get);
    const data = await response.json();
    callback(data);
  } catch (err) {
    console.error(err);
  }
};

// Popular movies API call
const popularMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    console.log(data);
  });
};

// Top rated movies API call
const topRatedMovies = () => {
  getData(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`, (data) => {
    console.log(data);
  });
};

popularMovies();
topRatedMovies();
