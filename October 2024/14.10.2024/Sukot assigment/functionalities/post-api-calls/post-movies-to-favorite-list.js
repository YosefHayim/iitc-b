import { postData } from "../api-functions.js";
import {accountId} from "../env.js"


const addfavoriteMovieToList = (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: true
  };

  postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, (data) => {
    console.log(data);
  }, favMovie);
};

export {addfavoriteMovieToList}