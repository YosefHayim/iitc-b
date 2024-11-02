import {
  popularOfTheWeekContainer,
  searchPaginationContainer,
} from "../../dom/storage-elements-dom.js";
import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { navigateToMoviePage } from "../../dom/homepage-navigate-to-single-movie-page-dom.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { setPlayBtnVideo } from "../../dom/set-play-button-href-to-video-dom.js";
import { increasePage } from "../../global/increasing-page.js";
import { decreasePage } from "../../global/decreasing-page.js";
import { isMovieAddedFav } from "../../dom/favorite-ids-storage.js";
import { popularMoviesOfWeek } from "../../get-api-calls/get-popular-movies-of-week.js";

// Handles user interactions on the "Weekly Hits" page.
const weeklyHitsPageButtons = () => {
  popularOfTheWeekContainer.addEventListener("click", async (ev) => {
    // Identify the clicked interactive elements within a movie card.
    const dataBtn = ev.target.closest(".white-data-btn");
    const shareImg = ev.target.closest(".white-share-img");
    const heartBtn = ev.target.closest(".white-heart-trailer-btn");
    const playButton = ev.target.closest(".play-button-btn");
    const movieCard = ev.target.closest(".movie-card");
    const trailerImg = ev.target.closest(".img-trailer-link");
    const movieName = movieCard.querySelector("h1").textContent;
    const movieCardId = movieCard.id.replace(/\D/g, "");

    // If no movie card is found, display an error message and stop execution.
    if (!movieCard) {
      displayAlertMessage("no-movie-card-found");
      return;
    }

    // Handle "Data" button click: Navigate to the movie page.
    if (dataBtn) {
      try {
        const result = await getMovieTrailer(movieCardId);

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("no-movie-data-exist", movieName);
          console.error("Error getting the movie ID", movieCardId);
        } else {
          const videoId = result.key;
          displayAlertMessage("navigating-to-another-page", movieName);
          navigateToMoviePage(movieCardId, videoId);
        }
      } catch (error) {
        displayAlertMessage("no-movie-data-exist", movieName);
        console.error("Error navigating to single movie page", error);
      }
      return;
    }

    // Handle "Share" button click: Copy the trailer URL to clipboard.
    if (shareImg) {
      ev.preventDefault();
      try {
        const result = await getMovieTrailer(movieCardId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          displayAlertMessage("success-copy-movie-url", movieName);
          handleCopyToClipboard(videoUrl);
        }
      } catch (error) {
        displayAlertMessage("This-movie-has-no-youtube-url", movieName);
        console.error("Error fetching movie trailer:", error);
      }
    }

    // Handle the heart button click: Add the movie to the favorites list.
    if (heartBtn) {
      ev.preventDefault();
      const isAdded = isMovieAddedFav(movieCardId, movieName);

      // If the movie was successfully added to the favorites (not already in the list)
      if (isAdded) {
        // Now we add the movie to the list and display the success message
        addfavoriteMovieToList(movieCardId);
        displayAlertMessage("success-added-movie-to-favorite-picks", movieName);
        return;
      } else {
        // Do nothing if the movie was already in the favorites
        return;
      }
    }

    // Handle "Play" button click: Open the movie trailer.
    if (playButton) {
      try {
        const result = await getMovieTrailer(movieCardId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If no trailer is available, display an error message.
        if (!result.key) {
          displayAlertMessage("No trailer to watch", movieName);
        } else {
          setPlayBtnVideo(playButton, videoUrl);
          window.location.href = videoUrl;
        }
      } catch (error) {
        displayAlertMessage("This-movie-has-no-youtube-url", movieName);
        console.error("Error fetching movie trailer:", error);
      }
    }

    // Handle trailer image click: Redirect to the YouTube trailer.
    if (trailerImg) {
      try {
        const result = await getMovieTrailer(movieCardId);
        const videoUrl = `https://www.youtube.com/watch?v=${result.key}`;

        // If no trailer is available, display an error message.
        if (!result.key) {
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

const isNextPagePrevPageWeeklyHits = () => {
  let count = 1;

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
      popularMoviesOfWeek(count);
      displayAlertMessage(`redirecting-next-page`, count);
    } else if (prevBtn) {
      if (count === 1) {
        displayAlertMessage("cant-go-lower-than-1", count);
        return;
      }
      count = decreasePage(count);
      popularMoviesOfWeek(count);
      displayAlertMessage(`redirecting-previous-page`, count);
    }
  });
};

export { weeklyHitsPageButtons, isNextPagePrevPageWeeklyHits };
