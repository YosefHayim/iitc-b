import { displayAlertMessage } from "../../dom/alert-message-dom.js";
import { isMovieAddedFav } from "../../dom/favorite-ids-storage.js";
import { navigateToMoviePage } from "../../dom/homepage-navigate-to-single-movie-page-dom.js";
import { setPlayBtnVideo } from "../../dom/set-play-button-href-to-video-dom.js";
import { similarMoviesContainer } from "../../dom/storage-elements-dom.js";
import { getMovieTrailer } from "../../get-api-calls/get-movie-trailer.js";
import { addfavoriteMovieToList } from "../../post-api-calls/post-add-movie-to-favorite-list.js";
import { handleCopyToClipboard } from "./global-copy-to-clipboard-el.js";

const similarMoviesContainerEl = () => {
  similarMoviesContainer.addEventListener("click", async (ev) => {
    ev.preventDefault();

    // If the click was not on a movie card we avoid continue the event listener logic.
    const movieCard = ev.target.closest(".movie-card");

    if (!movieCard) {
      return;
    }

    const movieName = movieCard.querySelector(".title").textContent;

    // Identify the nearest interactive elements in the movie card.
    const dataBtn = ev.target.closest(".white-data-btn");
    const shareButton = ev.target.closest(".white-share-trailer-btn");
    const heartButton = ev.target.closest(".white-heart-trailer-btn");
    const playButton = ev.target.closest(".play-button-btn");
    const trailerImg = ev.target.closest(".img-trailer-link");
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
        displayAlertMessage("This-movie-has-no-youtube-url", movieName);
        console.error("Error fetching movie trailer:", error);
      }
      return;
    }
  });
};

export { similarMoviesContainerEl };
