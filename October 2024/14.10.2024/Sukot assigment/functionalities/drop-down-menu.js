import { dropDownMenu } from "./domEls.js";
import { popularMoviesOfDay } from "./popular-movies-of-day.js";
import { popularMoviesOfWeek } from "./popular-movies-of-week.js";

const isDayOrWeek = () => {
  
  dropDownMenu.addEventListener('click', (ev) => {
  ev.preventDefault();

  const pageClicked = ev.target.closest('a').textContent;
  if (pageClicked === 'Popular of the Day') {
    popularMoviesOfDay()
  } else {
    popularMoviesOfWeek()
  }
}
)}

export {isDayOrWeek}