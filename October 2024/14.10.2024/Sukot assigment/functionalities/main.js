import { openCloseMobileIconFn } from "./mobile-burger-icon.js";
import { trendingMoviesFn } from "./trendingMovies.js";

const mainFn = () => {
  // Run this on all pages
  openCloseMobileIconFn(); 

  // Determine which page is currently active
  const currentPage = window.location.pathname;

  // Only run trendingMoviesFn if we're on the homepage
  if (currentPage.includes('index.html')) {
    trendingMoviesFn();
  }
};

mainFn();
