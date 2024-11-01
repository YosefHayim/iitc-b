# Movie Database Application

## Overview
Welcome to the **Movie Database Application**! This app allows users to search for, view, and manage their favorite movies dynamically by fetching data from the TMDB (The Movie Database) API.

**Explore the API**: [TMDB API Documentation](https://developer.themoviedb.org/reference/intro/getting-started)

## Setup Instructions
1. Open the `env-teacher.js` file.
2. Insert your `apiKey`, `token`, `accountID`, and `sessionID`.
3. Rename the file to `env.js` to enable full functionality.

## Fonts
- **Bebas Neue**: Main font for headings (Netflix-inspired).
- **Roboto**: Fallback font for enhanced readability.

## Image Structure
The image assets are organized into folders by purpose for easier management:
- **About Us Page**: Images used for the About Us section.
- **Buttons Pagination**: UI button images for pagination.
- **Desktop Navbar**: Images for the desktop version of the navigation bar.
- **Error 404 Page**: Images used on the 404 error page.
- **Favicon**: Icon for the website tab (favicon).
- **Favorite Page**: Images for displaying favorite movies.
- **Homepage Background**: Background images used on the homepage.
- **Mobile Navbar**: Navigation images for the mobile layout.
- **Feedback Page**: Images for user feedback.
- **User Activity**: Images related to user interaction or activities.

## Styles
The stylesheets are structured by page and component for consistency and ease of maintenance. This ensures cohesive design across both desktop and mobile devices.

## Functionalities

### DOM Manipulation
The following files manage different parts of the DOM:
- **alert-message-dom.js**: Handles displaying alert messages across the app.
- **apply-white-mode.js**: Toggles the white (light) mode for the website.
- **display-movies-dom.js**: Dynamically displays movie listings fetched from the API.
- **favorite-movie-card-dom.js**: Manages the display of favorite movie cards.
- *(and more)*

### Event Listeners
- **homepage-containers-next-prev-pagination.js**: Manages next/previous pagination on the homepage.
- **global-burger-open-mobile-menu-el.js**: Controls opening and closing the mobile menu.
- **search-query.js**: Handles search queries and directs users to the appropriate movie listings.
- *(and more)*

### API Calls
API interaction is handled through the following files:
- **api-functions.js**: Manages all API calls to fetch and manipulate data.
- **get-favorite-movies-list.js**: Retrieves the user's list of favorite movies.
- **get-popular-movies-of-week.js**: Fetches the most popular movies for the current week.
- *(and more)*

### Global Files
Global files used across the app include:
- **env.js**: Contains the environment variables like API keys and tokens.
- **main.js**: The central script for initializing and running the app.
- *(and more)*

### Post-API Calls
These files handle post-API interactions:
- **post-add-movie-to-favorite-list.js**: Adds a selected movie to the user's favorite list.
- **post-remove-movie-from-favorite-list.js**: Removes a movie from the user's favorite list.

## Conclusions from Completing the Project
1. **Research First**: Before jumping into coding, research how a typical frontend vanilla project should be structured.
2. **Plan Your Design**: Instead of constantly modifying and refactoring, settle on a prototype and make changes from there.
3. **Balance Design and Functionality**: A beautiful website with poor functionality is not effective. Strive for balance.
4. **Focus on One Page**: Rather than copying and pasting sections across multiple HTML files, finish one page completely before moving on.
5. **Learn Through Doing**: Hands-on learning is key to understanding code and improving skills.
6. **Improvement Over Time**: Although messy at the start, the code became more structured and cleaner over the course of the project.
7. **Work in Short Intervals**: Stick to short work sessions, like the 30-minute Pomodoro technique, to avoid burnout.
8. **Comment Your Code**: Adding comments makes it easier for others (and your future self) to understand the code’s purpose.
9. **Use Short, Descriptive Function Names**: Keep function names simple and reflective of their purpose.
10. **Consistent Naming**: Name your files and functions similarly to avoid confusion.
11. **Use Proper HTML Tags**: Stick to semantic HTML tags such as `<main>`, `<section>`, `<span>`, and `<strong>`.
12. **Leverage Local Storage**: It's powerful for saving user preferences like toggling between dark and light modes.
13. **Don't Panic**: If things go wrong, take your time to fix issues gradually rather than rushing.
14. **Stay Focused**: Work on one task at a time without getting distracted by other related areas.
15. **Maintain Clean Code**: Ensure the HTML, JavaScript, and CSS are properly structured, with adequate spacing between lines.
16. **Button Placement**: Avoid placing button tags inside an image; it's better to do the reverse.
17. **Minimize CSS Transforms**: Avoid excessive use of the CSS `transform` property for smoother performance.
18. **Design Matters**: A well-designed website is just as important as functionality.
19. **Keep Functions Short**: If a function exceeds 20–30 lines, break it down into smaller, modular pieces.
20. **Get Proper Rest**: Don’t stay up all night—better sleep leads to better performance.
21. **New Concepts Learned**: Throughout the project, I picked up new techniques such as sets, localStorage, `window.navigate`, `window.href`, passing queries in URLs, toggling between dark and light modes, organizing files, creating modular code, and using event delegation.
22. **Modular Code**: Storing reusable functions and other elements helped in creating additional pages without duplicating code.
23. **Reduce Repetition**: Look for ways to minimize repeated code, especially in event listeners.
24. **Checklists Help**: Create a checklist of needed features before starting to code to avoid confusion.
25. **Functionality First, Then Design**: Prioritize getting the app working correctly before focusing on the design.
26. **Mobile-First Design**: Always start by designing for mobile before scaling to desktop.
27. **Console log as much as possible**: no need to remove console log until I finish everything completely.
28. **Work on the project from the first path**: Not work the paths of files from the IITC but from the first folder it has all the root.
29. **Attach event listener with multiple type of events to single container**: Can do a for each on a array of events listeners types and additionally event delegation on it.

**Total hours to complete the project**: 120 hours and 50 minutes (tracked via Google Calendar).

