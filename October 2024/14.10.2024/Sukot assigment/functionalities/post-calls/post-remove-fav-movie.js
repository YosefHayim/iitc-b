import { postData } from "../api-functions.js";
import {accountId} from "../security/env.js"


const removeFavMovie = (movieCardId) => {
  const favMovie = {
    media_type: 'movie',
    media_id: movieCardId,
    favorite: false
  };

  postData(`https://api.themoviedb.org/3/account/${accountId}/favorite`, (data) => {
    console.log(data);
  }, favMovie);
};

export {removeFavMovie}