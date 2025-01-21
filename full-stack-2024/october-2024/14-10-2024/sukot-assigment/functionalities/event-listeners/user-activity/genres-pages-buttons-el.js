import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import {
  mainContainer,
  searchPaginationContainer,
} from "../../dom/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { navigateToMoviePage } from "../../dom/homepage-navigate-to-single-movie-page-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../dom/set-play-button-href-to-video-dom.js";
import { isMovieAddedFav } from "../../dom/favorite-ids-storage.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";
import { getMoviesGenresById } from "../../get-api-calls/get-movie-genre-by-id.js";

// Handles user interactions on the homepage for movie cards.
const genresButtonsListeners = () => {
  // Attach an event listener to each movie card container on the homepage.
  mainContainer.addEventListener("click", async (ev) => {
    // Identify the nearest interactive elements in the movie card.
    const dataBtn = ev.target.closest(".white-data-btn");
    const shareButton = ev.target.closest(".white-share-trailer-btn");
    const heartButton = ev.target.closest(".white-heart-trailer-btn");
    const playButton = ev.target.closest(".play-button-btn");
    const movieCard = ev.target.closest(".movie-card");
    const trailerImg = ev.target.closest(".img-trailer-link");

    // If the movie card doesn't exist, alert the user and stop execution.
    if (!movieCard) {
      displayAlertMessage("no-movie-card-found");
      return;
    }

    const movieName = movieCard.querySelector(".title").textContent;
    const movieId = movieCard.id.replace(/\D/g, "");

    // Handle the data button click: Navigate to the movie page.
    if (dataBtn) {
      try {
        const result = await getMovieTrailer(movieId);

        // If the trailer is not available, show an error message.
        if (!result.key) {
          displayAlertMessage("no-movie-data-exist", movieName);
          console.error("Error getting the movie ID", movieId);
        } else {
          const videoId = result.key;
          displayAlertMessage("navigating-to-another-page", movieName);
          navigateToMoviePage(movieId, videoId);
        }
      } catch (error) {
        console.error("Error navigating to single movie page", error);
      }
      return;
    }

    // Handle the share button click: Copy the trailer URL to the clipboard.
    if (shareButton) {
      ev.preventDefault();
      try {
        const result = await getMovieTrailer(movieId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If the trailer is not available, show an error message.
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

    // Handle the heart button click: Add the movie to the favorites list.
    if (heartButton) {
      ev.preventDefault();
      const isAdded = isMovieAddedFav(movieId, movieName);

      // If the movie was successfully added to the favorites (not already in the list)
      if (isAdded) {
        // Now we add the movie to the list by sending the API request and display the success message
        addfavoriteMovieToList(movieId);
        displayAlertMessage("success-added-movie-to-favorite-picks", movieName);
        return;
      } else {
        // Do nothing if the movie was already in the favorites
        return;
      }
    }

    // Handle the play button click: Open the movie trailer.
    if (playButton) {
      try {
        const result = await getMovieTrailer(movieId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If the trailer is not available, show an error message.
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

    // Handle the trailer image click: Redirect to the YouTube trailer.
    if (trailerImg) {
      try {
        const result = await getMovieTrailer(movieId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If the trailer is not available, show an error message.
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

const genresPaginationButtons = () => {
  let count = 1;
  const urlParams = new URLSearchParams(window.location.search);
  const genreUrlId = Number(urlParams.get("genreId"));

  searchPaginationContainer.addEventListener("click", (ev) => {
    ev.preventDefault();
    const nextBtn = ev.target.closest(".next-page");
    const prevBtn = ev.target.closest(".previous-page");

    if (nextBtn) {
      count = increasePage(count);
      if (count === 0) {
        displayAlertMessage("cant-go-lower-than-1", count);
        return;
      }
      getMoviesGenresById(genreUrlId, count);
      displayAlertMessage("redirecting-next-page", count);
    } else if (prevBtn) {
      if (count === 1) {
        displayAlertMessage("cant-go-lower-than-1", count);
        return;
      }

      count = decreasePage(count);
      getMoviesGenresById(genreUrlId, count);
      displayAlertMessage("redirecting-previous-page", count);
    }
  });
};

export { genresButtonsListeners, genresPaginationButtons };
