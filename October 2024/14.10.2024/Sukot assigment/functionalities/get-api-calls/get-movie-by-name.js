import { homePageAllContainers, homepageTitlesContainers} from "../DOM/storage-elements-dom.js";
import { getData } from "./api-functions.js";
import { redirectToErrorPage } from "../DOM/redirect-to-404-dom.js";
import { displayMovies } from "../DOM/display-movies-dom.js";
import { dynamicTitlesDisplay } from "../DOM/titles-dynamic-display.js";

// This function is responsible for searching a movie by the input value we are receiving from the inputs on the browser.
// If a number page was provided we use it, else we default it to one.
const searchMovieByName = async (inputValue, count = 1) => {
  try {
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${count}`);

    console.log(data);
    
    // If the data is falsy we redirect the user to the error page.    
    if (!data) {
      redirectToErrorPage();
      return;
    }
    // We remove each container title that is not equal to the search results name which is the container of the search result title.
    homepageTitlesContainers.forEach(title => {if (!title.classList.contains('search-results-name')) title.remove();});
    // We remove each container except for the container that is of the search result query.
    homePageAllContainers.forEach(container => {if (!container.classList.contains('search-results-name')) container.remove();});

    // Manipulating the dom by setting a new title for the title container
    let textTitle = `${inputValue} Movies: ${data.total_results} Page: ${data.page}/${data.total_pages}`
    dynamicTitlesDisplay('Search result title page by Name',textTitle)
    // Displaying the movies by the relevant search container.
    displayMovies('Search result page id and name',data)
    // If any error occurred durning the API call we catch that error and display it in the console.
  } catch (error) {
    console.error('Error fetching search results:', error); 
  }
};

export { searchMovieByName };
