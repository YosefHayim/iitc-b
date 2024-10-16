// Function to search movies based on user input
const searchMovies = () => {
  formData.forEach(form => {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const inputValue = form.querySelector('input').value.trim();
      if (inputValue.length >= 2) {

        titlesContainers.forEach(title => {
          title.style.display = 'none';
        });
        const domTitleTxt = document.querySelector('.currently-movies-in-theatres-container-title');
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

        getData(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`, (data) => {
          if (data.results.length === 0) {
            window.location.href = 'error404.html';
          } else {
            domTitleTxt.textContent = `Total movies found: ${data.total_results}`;
            data.results.forEach((movie) => {
              const movieCard = createMovieCard(movie);
              searchResultContainer.appendChild(movieCard);
            });
          }
        });
      } else {
        alert('Please provide a movie name');
      }
    });
  });
};

export {searchMovies}