import { burgerIconActivate } from "./burger-open-mobile-menu.js";
import { createFavMovieCard } from "./create-favorite-movie-card.js";
import { createMovieCard } from "./dom-movies-cards.js";
import { domDropDown } from "./drop-down-homepage.js";
import { currentlyInTheaters } from "./get-current-movies-in-theatres.js";
import { displayFavoriteMoviesList } from "./get-fav-movies-list.js";
import { getMoviesTrailers } from "./get-movies-trailer.js";
import { popularMovies } from "./get-popular-movies.js";
import { getStarRatingImage } from "./get-rating-movie.js";
import { searchMovies } from "./get-search-movies-input.js";
import { topRatedMovies } from "./get-top-rated-movies.js";
import { upComingMovies } from "./get-upcoming-movies.js";
import { addfavoriteMovieToList } from "./post-movies-to-favorite-list.js";
import { removeFavMovie } from "./post-remove-fav-movie.js";
import { resetPlaceholder } from "./reset-placeholder-input.js";





if (window.location.pathname.endsWith('favorite.html')) {
  displayFavoriteMoviesList(); 
}

if (window.location.pathname.endsWith("index.html")) {
  burgerIconActivate();
  domDropDown();
  currentlyInTheaters(); 
  displayFavoriteMoviesList();
  popularMovies();
  searchMovies();
  topRatedMovies();
  upComingMovies();
  resetPlaceholder();
}
