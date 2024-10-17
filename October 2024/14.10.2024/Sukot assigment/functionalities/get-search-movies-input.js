import { getData } from "./api-functions.js";
import {apiKey} from "./env.js"
import { formData, 
  titlesContainers,
  domTitleTxt,
  upComingMoviesContainer
  ,theatresContainer,
  popularMoviesContainer
  ,topRatedMoviesContainer
  ,searchResultContainer,favMoviesContainer } from "./domEls.js";
  import {createMovieCard} from "./dom-movies-cards.js"


const searchMovies = () => {

  // Check if we are not on index.html
  if (!window.location.href.includes('index.html')) {
    // Redirect to index.html and pass query parameters if needed
    window.location.href = 'index.html';
    return;
  }
formData.forEach(form => {
  form.addEventListener('submit', (ev) => {
    
    ev.preventDefault();
    const inputValue = form.querySelector('input').value.trim();

    if (/^[a-zA-Z]+$/.test(inputValue)) {
      titlesContainers.forEach(title => title.style.display = 'none');
      domTitleTxt.style.cssText = `
        margin-bottom: 2em;
        border-radius: 3em;
        letter-spacing: 0em;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ff0000a1;
        width: 100%;
        text-align: center;
        line-height: 0em;
        box-shadow: 0em 0em 0em 0em;
        font-size: 1.5em;
      `;
      upComingMoviesContainer.style.display = 'none';
      theatresContainer.style.display = 'none';
      popularMoviesContainer.style.display = 'none';
      topRatedMoviesContainer.style.display = 'none';
      favMoviesContainer.style.display = `none`
      searchResultContainer.innerHTML = '';

      getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
        if (data.status_code === 7) {
          window.location.href = 'error404.html';
        } else {
          
          domTitleTxt.textContent = `Total movies found for ${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)} : ${data.total_results}`;
          data.results.forEach((movie) => {
            const movieCard = createMovieCard(movie);
            searchResultContainer.appendChild(movieCard);
          });
        }
      });
    } else if (/^[0-9]+$/.test(inputValue)) {
      getData(`https://api.themoviedb.org/3/movie/${inputValue}?api_key=${apiKey}`, (data) => {
        titlesContainers.forEach(title => title.style.display = 'none');
        domTitleTxt.style.cssText = `
          margin-bottom: 2em;
          border-radius: 3em;
          letter-spacing: 0em;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #ff0000a1;
          width: 100%;
          text-align: center;
          line-height: 0em;
          box-shadow: 0em 0em 0em 0em;
          font-size: 1.5em;
        `;
        upComingMoviesContainer.style.display = 'none';
        theatresContainer.style.display = 'none';
        popularMoviesContainer.style.display = 'none';
        topRatedMoviesContainer.style.display = 'none';
        searchResultContainer.innerHTML = '';
        domTitleTxt.textContent = `Movie name is: ${data.title}`;
        const movieCard = createMovieCard(data);
        searchResultContainer.appendChild(movieCard);
      });
    } else {
      // Handle invalid input
      alert('Please enter a valid movie title or ID.')
    }
  });
});
};

export {searchMovies}