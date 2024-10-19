import { postData } from "../get-api-calls/api-functions.js";
import {accountId} from "../global/env.js"


const addfavoriteMovieToList = (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: true
  };

  postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, (data,response) => {
    console.log(data);

    if (!data || (response && response.status === 404)) {
      window.location.href = 'error404.html';
      return;
    }

  }, favMovie);
};

export {addfavoriteMovieToList}