import { redirectToErrorPage } from "../dom/redirect-to-404-dom.js"; // Redirects to the error page if needed
import { postData } from "../get-api-calls/api-functions.js"; // Function to handle API POST requests
import { accountId } from "../global/env.js"; // The account ID for user-specific actions

// This function removes a movie from the user's favorite list using the provided movie card ID.
const removeFavMovie = async (movieCardId) => {
  // Create the favorite movie object to be sent to the API for removal.
  const favMovie = {
    media_type: 'movie', // Specifies the type of media
    media_id: movieCardId, // The ID of the movie to be removed
    favorite: false // Indicates that this movie is being removed from favorites
  };

  try {
    // Make a POST request to remove the favorite movie from the user's account.
    const data = await postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, favMovie);

    // If the data returned is falsy, redirect to the error page.
    if (!data) {
      redirectToErrorPage();
      return;
    }

  } catch (error) {
    // Log any errors that occur during the API call and redirect to the error page.
    console.error('Error removing movie from favorite list:', error);
    redirectToErrorPage();
  }
};

export { removeFavMovie };
