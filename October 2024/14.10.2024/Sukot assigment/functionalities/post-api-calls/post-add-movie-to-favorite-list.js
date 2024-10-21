import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { postData } from "../get-api-calls/api-functions.js";
import { accountId } from "../global/env.js";

const addfavoriteMovieToList = async (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: true
  };

  try {
    const data = await postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, favMovie);

    if (!data) {
      redirectToErrorPage()
      return;
    }

    console.log(data);
    
  } catch (error) {
    console.error('Error adding movie to favorite list:', error);
    redirectToErrorPage()
  }
};

export { addfavoriteMovieToList };
