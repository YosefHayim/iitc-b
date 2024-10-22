import { titlesStorage } from "./storage-titles-containers-dom.js"

const dynamicTitlesDisplay = (containerTitleName, textTitle) => {
  const chosenContainer = titlesStorage(containerTitleName);
  
  if (!chosenContainer) {
    console.error("Container not found for:", containerTitleName);
    return;
  }

  chosenContainer.containerTitleEl.textContent = textTitle;

}


export {dynamicTitlesDisplay}