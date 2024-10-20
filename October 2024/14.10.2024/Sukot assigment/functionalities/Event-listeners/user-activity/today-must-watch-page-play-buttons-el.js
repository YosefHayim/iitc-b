import { displayAlertMessage } from "../../DOM/alert-message-dom.js";
import { popularOfTheDayContainer } from "../../DOM/storage-elements-dom.js"

const todayMustWatchPlayButtons = () => {  
  popularOfTheDayContainer.addEventListener('click',(ev) => {
    ev.preventDefault();
    
    const playBtn = ev.target.closest('.play-button-btn')

    if (playBtn) {
      let backgroundColor = 'red'
      let message = `Sorry, this movie don't have a trailer yet.`
      displayAlertMessage(message,backgroundColor)
    }
    
  })
}

export { todayMustWatchPlayButtons }