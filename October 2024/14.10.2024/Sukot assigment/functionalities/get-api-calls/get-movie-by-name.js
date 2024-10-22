import { homePageAllContainers, homepageTitlesContainers} from "../DOM/storage-elements-dom.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

const searchMovieByName = async (inputValue, count = 1) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count}`);

    console.log(data);
    
    if (data.results.length === 0) {
      redirectToErrorPage();
      return;
    }
  
    homepageTitlesContainers.forEach(title => {if (!title.classList.contains('search-results-name')) title.remove();});
    homePageAllContainers.forEach(container => container.remove());

    let textTitle = `${inputValue} Results: ${data.total_results} Movies, Total Pages: ${data.total_pages}`
    dynamicTitlesDisplay('Search result title page by Name',textTitle)
    
    displayMovies('Search result page id and name',data)

  } catch (error) {
    console.error('Error fetching search results:', error); 
  }
};

export { searchMovieByName };
