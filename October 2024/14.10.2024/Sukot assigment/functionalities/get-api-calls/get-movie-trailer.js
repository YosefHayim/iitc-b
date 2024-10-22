import { getData } from "./api-functions.js";
import { apiKey } from "../global/env.js";

const getMovieTrailer = async (movieId) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=videos`);

    if (!data) {
      console.log(`Error fetching data`);
      return;
    }

    const video = data.videos?.results?.find(vid => vid.type === "Trailer" && vid.key);
    return video;

  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};

export { getMovieTrailer };
