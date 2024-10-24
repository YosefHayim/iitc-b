// This function stores and returns alert messages dynamically, reducing repeated text for user notifications.
const alertMessagesTypes = (messageType, word) => {
  // Storage array containing objects with the following keys:
  // messageType: the type of alert,
  // message: the message to display to the user,
  // backgroundColor: the background color for the alert container.
  const messages = [
    // Success messages (green background)
    {
      messageType: 'success-removed-movie',
      message: `Removed "${word}".`,
      backgroundColor: 'green'
    },
    {
      messageType: 'redirecting-next-page',
      message: `Next page: ${word}.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-added-trailer',
      message: `Trailer for "${word}" added.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-received-movie-data',
      message: `Data for "${word}" loaded.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-added-movie-to-favorite-picks',
      message: `"${word}" added to favorites.`,
      backgroundColor: 'green'
    },
    {
      messageType: 'success-copy-movie-url',
      message: `Copied URL for "${word}".`,
      backgroundColor: 'green'
    },
    {
      messageType: 'navigating-to-another-page',
      message: `Redirecting...`,
      backgroundColor: 'green'
    },
    {
      messageType: 'redirecting-previous-page',
      message: `Back to ${word}.`,
      backgroundColor: 'green'
    },

    // Error messages (red background)
    {
      messageType: 'Error',
      message: 'Error occurred!',
      backgroundColor: 'red'
    },
    {
      messageType: 'no-movie-id-found',
      message: `No movie card for "${word}".`,
      backgroundColor: 'red'
    },
    {
      messageType: 'cant-go-lower-than-1',
      message: `Can't go lower than ${word}.`,
      backgroundColor: 'red'
    },
    {
      messageType: 'error-fetch-movie-trailer',
      message: `No trailer for "${word}".`,
      backgroundColor: 'red'
    },
    {
      messageType: 'input-error',
      message: `Invalid: ${word}.`,
      backgroundColor: 'red'
    },
    {
      messageType: 'no-movie-data-exist',
      message: `No data for "${word}".`,
      backgroundColor: 'red'
    },

    // Warning messages (yellow background)
    {
      messageType: 'no-url-to-copy',
      message: `No URL for "${word}".`,
      backgroundColor: '#ffcd05'
    },
    {
      messageType: 'no-youtube-video-available',
      message: `No trailer for "${word}".`,
      backgroundColor: '#ffcd05'
    },
    {
      messageType: 'No trailer to watch',
      message: `No trailer for "${word}".`,
      backgroundColor: '#ffcd05'
    },
    {
      messageType: 'No-trailer-found',
      message: `No trailer found for: "${word}".`,
      backgroundColor: '#ffcd05'
    },
    {
      messageType: 'reached-last-page',
      message: `You have reached the last page ${word}.`,
      backgroundColor: '#ffcd05'
    }
  ];

  // Find and return the message object that matches the provided messageType.
  const messageObject = messages.find(alert => alert.messageType === messageType);
  return messageObject;
};

export { alertMessagesTypes };
