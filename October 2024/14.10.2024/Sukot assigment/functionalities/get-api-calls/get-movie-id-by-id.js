import { apiKey } from "../global/env.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { homepageTitlesContainers, homePageAllContainers, } from "../DOM/storage-elements-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

const searchMovieById = async (inputValue) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`);
    console.log(data);
    
        
    if (!data) {
      redirectToErrorPage();
      return;
    }
    
    homepageTitlesContainers.forEach(title => {if (!title.classList.contains('search-results-name')) {title.remove();}});
    homePageAllContainers.forEach(container => container.remove());
    
    
    displayMovies('Search result page id and name', data);
    let textTitle = `Movie ID name ${inputValue}: ${data.original_title}`;
    dynamicTitlesDisplay('Search result title page by ID', textTitle);
    

    
  } catch (error) {
    console.error('Error fetching movie by ID:', error);
  }
};

export { searchMovieById };
