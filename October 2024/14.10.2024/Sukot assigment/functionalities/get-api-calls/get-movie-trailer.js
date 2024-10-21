import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js"

const getMovieTrailer = async (movieId) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);

    if (!data) {
      console.log(`Error fetching data`);
      // redirectToErrorPage();
      return;
    }

    // Find the first video (trailer) with type "Trailer"
    const video = data.videos?.results?.find(vid => vid.type === "Trailer" && vid.key);
    console.log(`video url found`, video);
    return video;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    // redirectToErrorPage();
  }
};

export { getMovieTrailer };
