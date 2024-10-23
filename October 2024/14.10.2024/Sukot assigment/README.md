# Movie Database Application

## Overview
Welcome to the Movie Database Application! This app lets users search for, view, and manage their favorite movies. It utilizes the TMDB (The Movie Database) API to fetch and display movie data dynamically.

**API Documentation**: [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started)

## Setup Instructions

1. Open the `env-teacher.js` file.
2. Insert your `apiKey`, `token`, `accountID`, and `sessionID`.
3. Rename the file to `env.js` to enable full functionality.

## Fonts

- **Bebas Neue**: Main font for headings (Netflix-style).
- **Roboto**: Fallback font in case Bebas Neue is unavailable.

## Images Structure

The project includes several image folders for specific uses:

- **About Us Page**: Images for the About Us section.
- **Buttons Pagination**: Various UI button images.
- **Desktop Navbar**: Images for the desktop navigation.
- **Error 404 Page**: Images for the 404 error page.
- **Favicon**: The site's favicon.
- **Favorite Page**: Images for the favorite movies section.
- **Homepage Background**: Background images for the homepage.
- **Mobile Navbar**: Images for mobile navigation.
- **Feedback Page**: Images for user feedback.
- **User Activity**: Images related to user interactions.

## Styles

Styles are organized by component and page types, ensuring a cohesive design across both desktop and mobile views.

## Functionalities

### DOM Manipulation Folder

- **alert-message-dom.js**: Manages alert messages.
- **apply-white-mode.js**: Toggles light mode.
- **display-movies-dom.js**: Displays movie listings.
- **favorite-movie-card-dom.js**: Manages favorite movie display.
- *(Add other DOM files as necessary)*

### Event Listeners Folder

- **homepage-containers-next-prev-pagination.js**: Handles pagination navigation.
- **global-burger-open-mobile-menu-el.js**: Opens mobile menu.
- **search-query.js**: Processes search queries.
- ...

### Get API Calls Folder

- **api-functions.js**: Manages API interactions.
- **get-favorite-movies-list.js**: Fetches the user's favorite movies.
- **get-popular-movies-of-week.js**: Retrieves weekly popular movies.
- ...

### Global Files

- **env.js**: Contains environment variables.
- **main.js**: Main entry point of the application.
- ...


### Post API Calls Folder

- **post-add-movie-to-favorite-list.js**: Adds movies to favorites via API.
- **post-remove-movie-from-favorite-list.js**: Removes movies from favorites via API.