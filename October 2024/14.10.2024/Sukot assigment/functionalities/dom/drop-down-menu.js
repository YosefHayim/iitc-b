import { dropDownMenu } from "./domEls.js";
import { popularMoviesOfDay } from "../get-api-calls/get-popular-movies-of-day.js";
import { popularMoviesOfWeek } from "../get-api-calls/get-popular-movies-of-week.js";

const isDayOrWeek = () => {
  
  dropDownMenu.addEventListener('click', (ev) => {
  ev.preventDefault();

  const pageClicked = ev.target.closest('a').textContent;
  if (pageClicked === 'Popular of the Day') {
    popularMoviesOfDay()
    return
  } else {
    popularMoviesOfWeek()
    return
  }
}
)}

export {isDayOrWeek}