# Project Title: Movie Database Application

## Overview

This project is a movie database application that allows users to search for, view, and manage their favorite movies. The application uses the TMDB (The Movie Database) API to fetch movie data, which is then dynamically manipulated and displayed in the user interface.

### Instructions

In the `env-teacher.js` file, please paste your `apiKey`, `token`, `accountID`, and `sessionID` in order to view the project. After doing so, ensure the file is renamed to `env.js` in order to properly see the website functionalities.

## Fonts

- **Bebas Neue**: Used for headings, simulating the Netflix font style.
- **Roboto**: Backup font used in case `Bebas Neue` is unavailable.

## Images

The project contains several image sub-folders, each serving a specific purpose:

- **about-us-page**: Images used on the About Us page.
- **buttons-pagination**: Various button images for UI elements.
- **desktop-navbar**: Images for the desktop navigation bar.
- **error-404-page**: Images displayed on the 404 error page.
- **favicon-logo**: The favicon used for the website.
- **favorite-page**: Images used on the favorite movies page.
- **homepage-bg**: Background images for the homepage.
- **mobile-navbar**: Images for the mobile navigation bar.
- **share-your-thoughts**: Images for the feedback page.
- **user-activity**: Images related to user activity features.

## Styles

This section contains the styles for each page, ensuring a cohesive design across the application. Styles are organized by component and page types, focusing on responsive design for both desktop and mobile views.

## Functionalities

### DOM Manipulation Files

1. **alert-message-dom.js**: Handles DOM manipulations for alert messages.
2. **apply-white-mode.js**: Switches the website theme to a light mode.
3. **create-div-dom.js**: Creates and manages div elements in the DOM.
4. **creating-movie-genres-dom.js**: Manages the display of movie genres in the DOM.
5. **display-movies-dom.js**: Handles the display of movies in the DOM.
6. **favorite-movie-card-dom.js**: Manages the favorite movie card display.
7. **favorite-skeleton-movie-card.js**: Displays a loading skeleton for favorite movie cards.
8. **global-loader-dom.js**: Controls the global loading animation in the DOM.
9. **homepage-movie-card-skeleton.js**: Displays skeleton loaders for movie cards on the homepage.
10. **homepage-movie-cards-dom.js**: Manages the display of movie cards on the homepage.
11. **homepage-navigate-to-single-movie-page-dom.js**: Manages navigation from the homepage to a single movie page.
12. **is-image-null-dom.js**: Checks for null images in the DOM.
13. **is-movie-title-long-dom.js**: Handles logic for movie titles that are too long.
14. **is-release-date-dom.js**: Checks and displays release dates in the DOM.
15. **no-trailer-image-dom.js**: Manages the display when there is no trailer image available.
16. **rating-movie-stars-img-dom.js**: Displays movie ratings using star images.
17. **redirect-to-404-dom.js**: Handles redirection to a 404 page.
18. **redirect-to-homepage-dom.js**: Redirects users to the homepage.
19. **reload-current-page-dom.js**: Reloads the current page.
20. **return-dark-mode.js**: Switches the website theme back to dark mode.
21. **round-rating-movie-dom.js**: Rounds off the movie rating display.
22. **set-play-button-href-to-video-dom.js**: Sets the href for play buttons to the video links.
23. **single-movie-page-dom.js**: Manages the single movie page display.
24. **storage-alert-messages.js**: Manages alert messages stored in local storage.
25. **storage-elements-dom.js**: Handles elements stored in local storage.
26. **storage-movies-elements-dom.js**: Manages movie-related elements in local storage.
27. **titles-dynamic-display.js**: Handles dynamic display of movie titles.

### Event Listeners

1. **homepage-containers-next-prev-pagination.js**: Manages pagination for navigating between movie containers on the homepage.
2. **dynamic-next-previous-page-pagination.js**: Handles next and previous page navigation for pagination.
3. **favorite-page-buttons-el.js**: Manages interactions with buttons on the favorite movies page.
4. **global-burger-open-mobile-menu-el.js**: Handles the opening of the mobile menu via the burger icon.
5. **global-copy-to-clipboard-el.js**: Allows copying content to the clipboard.
6. **global-drop-down-menu-el.js**: Manages the functionality of dropdown menus.
7. **global-go-bottom-button-el.js**: Handles scrolling to the bottom of the page.
8. **global-go-top-button-el.js**: Manages scrolling back to the top of the page.
9. **global-inputs-el.js**: Handles interactions with input fields globally.
10. **global-placeholders-inputs-el.js**: Manages placeholders for input fields globally.
11. **homepage-buttons-el.js**: Manages interactions with buttons on the homepage.
12. **search-query.js**: Handles the logic for processing search queries.
13. **today-must-watch-page-buttons-el.js**: Manages interactions with buttons on the "Today Must Watch" page.
14. **toggle-dark-mode.js**: Toggles the website theme between dark and light modes.
15. **weekly-hits-page-buttons-el.js**: Manages interactions with buttons on the "Weekly Hits" page.

### Get API Calls

1. **form-data-el.js**: Handles form data submissions and validations on the feedback page.
2. **api-functions.js**: Contains functions to manage API calls and responses.
3. **get-favorite-movies-list.js**: Fetches the user's favorite movies list from the API.
4. **get-movie-by-name.js**: Retrieves movie data based on the provided name.
5. **get-movie-id-by-id.js**: Fetches movie data using its unique ID.
6. **get-movie-trailer.js**: Retrieves the trailer for a specific movie.
7. **get-popular-movies-of-today.js**: Fetches movies that are currently popular today.
8. **get-popular-movies-of-week.js**: Retrieves movies that are popular for the week.
9. **get-single-movie-details.js**: Fetches detailed information for a single movie.
10. **get-total-current-movies-in-theatres.js**: Gets a list of all movies currently showing in theaters.
11. **get-total-popular-movies.js**: Retrieves a list of popular movies.
12. **get-total-top-rated-movies.js**: Fetches top-rated movies.
13. **get-total-upcoming-movies.js**: Retrieves a list of movies scheduled for release.

### Global Files

1. **decreasing-page.js**: Handles logic for decreasing the current page number in pagination.
2. **env.js**: Contains environment variables for the application.
3. **increasing-page.js**: Handles logic for increasing the current page number in pagination.
4. **main.js**: The main entry point for the application.

### Post API Calls

1. **post-add-movie-to-favorite-list.js**: Manages the addition of a movie to the user's favorite list via API.
2. **post-remove-movie-from-favorite-list.js**: Handles the removal of a movie from the user's favorite list via API.