import { alertMessage } from "../../DOM/alert-message-dom.js";
import { popularOfTheDayDiv } from "../../DOM/storage-elements-dom.js"

const playBtnClick = () => {  
  popularOfTheDayDiv.addEventListener('click',(ev) => {
    ev.preventDefault();
    
    const playBtn = ev.target.closest('.play-button-btn')

    if (playBtn) {
      let backgroundColor = 'red'
      let message = `Sorry, this movie don't have a trailer yet.`
      alertMessage(message,backgroundColor)
    }
    
  })
}

export {playBtnClick}