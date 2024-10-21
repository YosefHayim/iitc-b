import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { postData } from "../get-api-calls/api-functions.js";
import { accountId } from "../global/env.js";

const removeFavMovie = async (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: false
  };

  try {
    // Post the favorite movie data to remove it from the list
    const data = await postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, favMovie);

    if (!data) {
      redirectToErrorPage()
      return;
    }

    console.log(data);

  } catch (error) {
    console.error('Error removing movie from favorite list:', error);
    redirectToErrorPage()
  }
};

export { removeFavMovie };
