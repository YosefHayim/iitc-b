const alertMessagesTypes = (messageType, word) => {
  const messages = [
    // Green background color
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

    // Red background color
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

    // Yellow background color
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
    }
  ];

  // Find the message object by messageType
  const messageObject = messages.find(alert => alert.messageType === messageType);
  return messageObject;
};

export {alertMessagesTypes};
