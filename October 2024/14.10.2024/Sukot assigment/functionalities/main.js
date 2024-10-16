import { apiKey, apiToken, accountId } from "./env.js";
import {resetPlaceholder} from "./rest-placeholder-input.js"
import {searchMovies} from "./search-for-movies.js"



// Initialize functions if on the index.html page
if (window.location.pathname.endsWith("index.html")) {
  resetPlaceholder();
  upComingMovies();
  topRatedMovies();
  popularMovies();
  currentlyInTheaters();
  searchMovies();
}
