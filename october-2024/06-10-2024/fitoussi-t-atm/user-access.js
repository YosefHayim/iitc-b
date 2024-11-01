import { storedBalance, bodyHTML } from "./static-data.js";
import { userActivity } from "./user-activity.js";

// Function for correct PIN access
const userAccess = () => {
  bodyHTML.innerHTML = ''; 

  const correctMessage = document.createElement('h2');
  correctMessage.textContent = `PIN correct`;
  correctMessage.classList.add('validate');
  bodyHTML.appendChild(correctMessage);

  const newHTwo = document.createElement('h2');
  newHTwo.textContent = `What would you like to do next?`;
  bodyHTML.appendChild(newHTwo);

  // Call userActivity to display buttons
  userActivity(storedBalance);
};

export {userAccess}