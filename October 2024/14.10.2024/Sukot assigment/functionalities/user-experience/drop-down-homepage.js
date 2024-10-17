const domDropDown = () => {
  dropDownMenu.addEventListener('click', (ev) => {
  ev.preventDefault()

  const pageClicked = ev.target.closest('a').textContent
  if (pageClicked === 'Popular of the Day') {
    getData(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`, (data) => {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheDayDiv.appendChild(movieCard);

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

        domTitleTxt.textContent = `POPULAR MOVIES OF TODAY`
        upComingMoviesContainer.style.display = 'none';
        theatresContainer.style.display = 'none';
        popularMoviesContainer.style.display = 'none';
        topRatedMoviesContainer.style.display = 'none';
      });
    });
  } else {
    getData(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${apiKey}`, (data) => {
      data.results.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        popularOfTheWeekDiv.appendChild(movieCard);

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

        domTitleTxt.textContent = `POPULAR MOVIES OF THE WEEK`
        upComingMoviesContainer.style.display = 'none';
        theatresContainer.style.display = 'none';
        popularMoviesContainer.style.display = 'none';
        topRatedMoviesContainer.style.display = 'none';
      });
  })
  }
})}

export {domDropDown}