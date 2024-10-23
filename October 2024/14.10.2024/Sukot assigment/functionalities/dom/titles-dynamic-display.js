import { titlesStorage } from "./storage-titles-containers-dom.js"
// This function is taking two parameters the container name which is 
//being passed to the titlesStorage and returns it if it finds and the text that we want to display.
const dynamicTitlesDisplay = (containerTitleName, textTitle) => {
  const chosenContainer = titlesStorage(containerTitleName);
  // If we received falsy we return a console error.
  if (!chosenContainer) {
    console.error("Container not found for:", containerTitleName);
    return;
  }
  // Else we preform the manipulation on the container element.
  chosenContainer.containerTitleEl.textContent = textTitle;

}


export {dynamicTitlesDisplay}