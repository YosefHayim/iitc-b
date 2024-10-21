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
      messageType: 'no-movie-id-found',
      message: `The movie ${word} doesn't have a valid movie card.`,
      backgroundColor: 'red'
    },

    {
      messageType: 'cant-go-lower-than-1',
      message: `You can't go lower than current ${word}.`,
      backgroundColor: 'red'
    },

    {
      messageType: 'error-fetch-movie-trailer',
      message: `Can't fetch the trailer for movie "${word}"`,
      backgroundColor: 'red'
    },

    {
      messageType: 'input-error',
      message: `Input value is ${word}.`,
      backgroundColor: 'red'
    },

    {
      messageType: 'no-movie-data-exist',
      message: `The movie ${word} has no available data`,
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

export {alertMessagesTypes}