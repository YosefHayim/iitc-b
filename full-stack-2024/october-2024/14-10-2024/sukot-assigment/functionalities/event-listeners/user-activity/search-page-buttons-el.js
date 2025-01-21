import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import {
  searchPaginationContainer,
  searchResultContainer,
} from "../../dom/storage-elements-dom.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { navigateToMoviePage } from "../../dom/homepage-navigate-to-single-movie-page-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../dom/set-play-button-href-to-video-dom.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { increasePage } from "../../global/increasing-page.js";
import { searchMovieByName } from "../../get-api-calls/get-movie-by-name.js";
import { isMovieAddedFav } from "../../dom/favorite-ids-storage.js";

// Handles user interactions on the homepage for movie cards.
const searchPageButtonsEl = () => {
  // Attach an event listener to each movie card container on the search page.
  searchResultContainer.addEventListener("click", async (ev) => {
    // Identify the nearest interactive elements in the movie card.
    const dataBtn = ev.target.closest(".white-data-btn");
    const shareButton = ev.target.closest(".white-share-trailer-btn");
    const heartButton = ev.target.closest(".white-heart-trailer-btn");
    const playButton = ev.target.closest(".play-button-btn");
    const movieCard = ev.target.closest(".movie-card");
    const trailerImg = ev.target.closest(".img-trailer-link");
    const movieName = movieCard.querySelector(".title").textContent;
    const movieId = movieCard.id.replace(/\D/g, "");

    if (
      !dataBtn &&
      !shareButton &&
      !heartButton &&
      !playButton &&
      !movieCard &&
      !trailerImg &&
      !movieName &&
      !movieId
    ) {
      return;
    }

    if (!movieName) {
      return;
    }

    if (!movieCard) {
      // If the movie card doesn't exist, alert the user and stop execution.
      displayAlertMessage("no-movie-card-found");
      return;
    }

    // Handle the data button click: Navigate to the movie page.
    if (dataBtn) {
      try {
        const result = await getMovieTrailer(movieId);

        // If the trailer is not available, show an error message.
        if (!result) {
          displayAlertMessage("no-movie-data-exist", movieName);
          console.error("Error getting the movie ID", movieId);
        } else {
          const videoId = result.key;
          displayAlertMessage("navigating-to-another-page", movieName);
          navigateToMoviePage(movieId, videoId);
        }
      } catch (error) {
        displayAlertMessage("no-movie-data-exist", movieName);
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
        if (!result) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          displayAlertMessage("success-copy-movie-url", movieName);
          handleCopyToClipboard(videoUrl);
        }
      } catch (error) {
        displayAlertMessage("This-movie-has-no-youtube-url", movieName);
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
        // Now we add the movie to the list and display the success message
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
        if (!result) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          setPlayBtnVideo(playButton, videoUrl);
          window.location.href = videoUrl;
        }
      } catch (error) {
        displayAlertMessage("This-movie-has-no-youtube-url", movieName);
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
        if (!result) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          setPlayBtnVideo(trailerImg, videoUrl);
          window.location.href = videoUrl;
        }
      } catch (error) {
        displayAlertMessage("This-movie-has-no-youtube-url", movieName);
        console.error("Error fetching movie trailer:", error);
      }
      return;
    }
  });
};
// A function to preform the next page fetch of the specific API with attaching an event listener

const isNextPagePrevPageSearchPage = () => {
  let count = 1;
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

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
      displayAlertMessage("redirecting-next-page", count);
      searchMovieByName(query, count);
    } else if (prevBtn) {
      if (count === 1) {
        displayAlertMessage("cant-go-lower-than-1", count);
        return;
      }

      displayAlertMessage("redirecting-previous-page", count);
      count = decreasePage(count);
      searchMovieByName(query, count);
    }
  });
};

export { searchPageButtonsEl, isNextPagePrevPageSearchPage };
