import { titlesStorage } from "./storage-titles-containers-dom.js";

// This function updates the text of a title container dynamically.
// It takes two parameters: the containerTitleName (passed to titlesStorage to find the container) and the textTitle (the text to display).
const dynamicTitlesDisplay = (containerTitleName, textTitle) => {
  const chosenContainer = titlesStorage(containerTitleName);

  // If the container is not found, log an error and stop.
  if (!chosenContainer) {
    console.error("Container not found for:", containerTitleName);
    return;
  }

  // Otherwise, update the title container with the provided text.
  chosenContainer.containerTitleEl.textContent = textTitle;
};

export { dynamicTitlesDisplay };
