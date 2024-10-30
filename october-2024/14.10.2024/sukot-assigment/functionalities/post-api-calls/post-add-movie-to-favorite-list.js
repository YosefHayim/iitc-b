import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js"; // Redirects to the error page if needed
import { postData } from "../get-api-calls/api-functions.js"; // Function to handle API POST requests
import { accountId } from "../global/env.js"; // The account ID for user-specific actions

// This function adds a movie to the user's favorite list using the provided movie card ID.
const addfavoriteMovieToList = async (movieCardId) => {
  // Create the favorite movie object to be sent to the API.
  const favMovie = {
    media_type: "movie", // Specifies the type of media
    media_id: movieCardId, // The ID of the movie to be added
    favorite: true, // Indicates that this movie is being added to favorites
  };

  try {
    // Make a POST request to add the favorite movie to the user's account.
    const data = await postData(
      `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      favMovie
    );

    // If the data returned is falsy, redirect to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }
  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error("Error adding movie to favorite list:", error);
    redirectToErrorPage();
  }
};

export { addfavoriteMovieToList };
