import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { redirectToErrorPage } from "../../DOM/redirect-to-404-dom.js";
import { redirectToGenreMoviesPage } from "../../DOM/redirect-to-genre-movies-page-dom.js";
import { genresContainer } from "../../DOM/storage-elements-dom.js";
// Event listener for clicking on the genres page getting the Id attached to the html tag and navigating to the rendering page of it.
const genresButtonsRedirect = () => {
  genresContainer.addEventListener('click', (ev) => {
    ev.preventDefault();

    const genreCard = ev.target.closest('.genre-card')
    const genreButtonNavigate = ev.target.closest('.genre-direct-btn')
    const imageGenre = ev.target.closest('img')
    
    if (genreButtonNavigate || imageGenre) {
      redirectToGenreMoviesPage(genreCard.id)
    }
  });
}

export { genresButtonsRedirect };
