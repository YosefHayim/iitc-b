import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { mainContainer } from "../../dom/storage-elements-dom.js";
import { removeFavMovie } from "../../post-api-calls/post-remove-movie-from-favorite-list.js";
import { navigateToMoviePage } from "../../dom/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "../user-activity/global-copy-to-clipboard-el.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../dom/set-play-button-href-to-video-dom.js";
import { movieIdList } from "../../dom/favorite-ids-storage.js";
import { saveMoviesToLocalStorage } from "../../dom/save-movies-to-ls-dom.js";
import { removeAllFavMovies } from "./favorite-page-remove-all-el.js";

// Handles all user interactions on the favorite movies page using event delegation.
const handleFavoriteMoviePage = () => {
  mainContainer.addEventListener("click", async (ev) => {
    // Identify the clicked element or button by its class.
    const trailerImg = ev.target.closest(".fav-movie-trailer-url");
    const dataBtn = ev.target.closest(".fav-white-data-btn");
    const shareButton = ev.target.closest(".fav-white-share-trailer-btn");
    const removeButton = ev.target.closest(".fav-remove-btn-icon");
    const playButton = ev.target.closest(".fav-play-button-btn");
    const movieCard = ev.target.closest(".movie-card");
    const removeAllBtn = ev.target.closest(".remove-all-fav");

    if (removeAllBtn) {
      removeAllFavMovies();
    }

    if (
      !trailerImg &&
      !dataBtn &&
      !shareButton &&
      !removeButton &&
      !playButton &&
      !movieCard &&
      !removeAllBtn
    ) {
      return;
    }

    // If no movie card is found, display an error message.
    if (!movieCard) {
      displayAlertMessage("no-movie-card-found");
      return;
    }

    const movieName = movieCard.querySelector(".title").textContent;
    const favMovieId = movieCard.id.replace(/\D/g, "");

    // Handle the "data" button click: Navigate to the movie page.
    if (dataBtn) {
      try {
        const result = await getMovieTrailer(favMovieId);

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("no-movie-data-exist", movieName);
          console.error("Error getting the movie ID", favMovieId);
        } else {
          // Navigate to the movie page if a trailer is available.
          const videoId = result.key;
          displayAlertMessage("navigating-to-another-page", movieName);
          navigateToMoviePage(favMovieId, videoId);
        }
      } catch (error) {
        console.error("Error navigating to single movie page", error);
      }
      return;
    }

    // Handle the "share" button click: Copy the movie trailer URL to the clipboard.
    if (shareButton) {
      ev.preventDefault();
      try {
        const result = await getMovieTrailer(favMovieId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          displayAlertMessage("success-copy-movie-url", movieName);
          handleCopyToClipboard(videoUrl);
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
      return;
    }

    // Handle the "remove" button click: Remove the movie from favorites.
    if (removeButton) {
      ev.preventDefault();
      try {
        movieIdList.delete(favMovieId);

        // Save the updated Set to localStorage
        saveMoviesToLocalStorage(movieIdList);

        removeFavMovie(favMovieId); // Remove the movie from the favorites list.
        movieCard.style.display = "none"; // Hide the movie card from the UI.
        displayAlertMessage("success-removed-movie", movieName);
      } catch (error) {
        console.error("Error removing movie:", error);
      }
      return;
    }

    // Handle the "play" button click: Play the movie trailer.
    if (playButton) {
      try {
        const result = await getMovieTrailer(favMovieId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          setPlayBtnVideo(playButton, videoUrl);
          window.location.href = videoUrl;
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
      return;
    }

    // Handle clicking on the trailer image: Redirect to the YouTube trailer.
    if (trailerImg) {
      try {
        const result = await getMovieTrailer(favMovieId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          setPlayBtnVideo(trailerImg, videoUrl);
          window.location.href = videoUrl;
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
      return;
    }
  });
};

export { handleFavoriteMoviePage };
