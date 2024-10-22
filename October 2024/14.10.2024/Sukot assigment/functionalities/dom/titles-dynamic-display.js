import { titlesStorage } from "./storage-titles-containers-dom.js"

const dynamicTitlesDisplay = (containerTitleName, textTitle) => {
  const chosenContainer = titlesStorage(containerTitleName);
  
  if (!chosenContainer) {
    console.error("Container not found for:", containerTitleName);
    return;
  }
  
  chosenContainer.containerTitleEl.textAlign = 'center';
  chosenContainer.containerTitleEl.style.display = 'flex';
  chosenContainer.containerTitleEl.textContent = textTitle;
  return containerTitleName;
}


export {dynamicTitlesDisplay}