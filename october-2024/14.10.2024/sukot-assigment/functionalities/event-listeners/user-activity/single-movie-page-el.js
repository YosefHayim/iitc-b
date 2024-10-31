import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { isMovieAddedFav } from "../../dom/favorite-ids-storage.js";
import { singlePageMovieData } from "../../dom/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";

console.log(singlePageMovieData);

const singleMoviePageListener = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("movieId");

  singlePageMovieData.addEventListener("click", (ev) => {
    ev.preventDefault();

    const favoriteBtn = ev.target.closest(".fav-button-movie-single-page");

    if (favoriteBtn) {
      const isAdded = isMovieAddedFav(movieId);
      if (isAdded) {
        displayAlertMessage("success-added-single-movie-to-fav-list");
        addfavoriteMovieToList(movieId);
        return;
      } else {
        favoriteBtn.textContext = `Movie already in favorite list.`;
      }
    }
  });
};

export { singleMoviePageListener };
