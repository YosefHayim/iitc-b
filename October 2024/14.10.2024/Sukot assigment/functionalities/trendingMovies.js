const exploreMoviesDiv = document.querySelector('.explore-movies');

const apiKey = '27257e5f4f0012e6b091eb4e6654f379';

const getMethod = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
};

// Get trending movies of today
const trendingMoviesFn = async (getMethod) => {
  try {
    const trendMoviesList = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`, getMethod);
    const data = await trendMoviesList.json();

    exploreMoviesDiv.innerHTML = data.results.map(movie => `
      <div class="movie-card">
        <div class="p-txt"> 
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Poster image of the movie ${movie.title}" class="movie-img">
          <p>${movie.overview}</p>
        </div>
      </div>`).join('');

  } catch (error) {
    console.error('Failed to fetch trending movies:', error);
  }
};

export { trendingMoviesFn };
