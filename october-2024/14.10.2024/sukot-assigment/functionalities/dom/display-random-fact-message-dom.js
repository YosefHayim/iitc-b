import { randomMessages } from "./storage-announcement-bar-messages-dom.js";
import { announcementBar } from "./storage-elements-dom.js";

const randomMessageDisplay = () => {
  if (announcementBar) {
    const randomMessage = randomMessages();
    announcementBar.innerHTML = `${randomMessage.message} `;
  }
};

// Displaying random message every 3 seconds.
setInterval(randomMessageDisplay, 4000);
export { randomMessageDisplay };
