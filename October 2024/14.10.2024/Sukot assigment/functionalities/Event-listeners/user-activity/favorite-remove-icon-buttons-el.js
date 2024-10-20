import { alertMessage } from "../../DOM/alert-message-dom.js";
import { reloadThisPage } from "../../DOM/reload-current-page-dom.js";
import { favMoviesContainer } from "../../DOM/storage-elements-dom.js";
import { removeFavMovie } from "../../post-api-calls/post-remove-movie-from-favorite-list.js";


// Favorite data buttons clicks.
const handleFavoriteRemoveButtonClick = () => {
  favMoviesContainer.addEventListener('click', (ev) => {
    
    const removeBtn = ev.target.closest('.fav-remove-btn-img');
    if (removeBtn) {
      const favMovieId = ev.target.closest('.movie-card').id.replace(/\D/g, '');
      removeFavMovie(favMovieId)

      setTimeout(() => {
        reloadThisPage()
      },500)
      let message = `Movie has been removed successfully.`
      alertMessage(message)
    }
  });
};

export { handleFavoriteRemoveButtonClick };
