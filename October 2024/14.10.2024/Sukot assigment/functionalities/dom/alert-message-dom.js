import { createDomEl } from "./create-div-dom.js";
import { alertMessageContainerEl, navbarDesktopEl } from "./storage-elements-dom.js";

const alertMessagesTypes = (messageType, word) => {
  const messages = [
    // Green background color
    {
      messageType: 'success-removed-movie',
      message: `Successfully removed the movie "${word}".`,
      backgroundColor: 'green'
    },
    {
      messageType: 'redirecting-next-page',
      message: `Redirecting next page ${word}.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-added-trailer',
      message: `Trailer for "${word}" loaded successfully.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-received-movie-data',
      message: `data for ${word} has loaded successfully`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-added-movie-to-favorite-picks',
      message: `Successfully added movie "${word}" to favorite picks.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-copy-movie-url',
      message: `Successfully copied movie "${word}" URL.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'navigating-to-another-page',
      message: `Redirecting...`,
      backgroundColor: 'green'
    },
    {
      messageType: 'redirecting-previous-page',
      message: `Redirecting previous page ${word}`,
      backgroundColor: 'green'
    },

    // Red background color
    {
      messageType: 'Error',
      message: 'Something went wrong!',
      backgroundColor: 'red'
    },

    {
      messageType: 'cant-go-lower-than-1',
      message: `You can't go lower than current ${word}.`,
      backgroundColor: 'red'
    },

    // Yellow background color
    {
      messageType: 'no-url-to-copy',
      message: `The movie ${word} has no URL to copy.`,
      backgroundColor: '#ffcd05'
    },
    {
      messageType: `no-youtube-video-available`,
      message: `The movie ${word} doesn't have a trailer out yet.`,
      backgroundColor: '#ffcd05'
    },
    {
      messageType: 'No trailer to watch',
      message: `The movie ${word} has no trailer to watch.`,
      backgroundColor: '#ffcd05'
    }
  ];

  // Find the message object by messageType
  return messages.find(alert => alert.messageType === messageType);
};



const displayAlertMessage = (messageType, word) => {
  const alert = alertMessagesTypes(messageType, word);

  if (alert) {
    const { message, backgroundColor } = alert;

    if (!alertMessageContainerEl) {
      const templateMessageContainer = createDomEl();
      templateMessageContainer.classList.add('template-message-container');
      templateMessageContainer.style.background = backgroundColor;
      templateMessageContainer.style.display = 'flex';
      templateMessageContainer.textContent = message;
      navbarDesktopEl.insertAdjacentElement('afterend', templateMessageContainer);

      setTimeout(() => {
        templateMessageContainer.style.display = 'none';
      }, 3000);

      return templateMessageContainer;
    } else {
      alertMessageContainerEl.style.background = backgroundColor;
      alertMessageContainerEl.textContent = message;
      alertMessageContainerEl.style.display = 'flex';

      setTimeout(() => {
        alertMessageContainerEl.style.display = 'none';
      }, 3000);
    }
  } else {
    console.error('Message type not found!');
  }
};

export { displayAlertMessage };
