// This function receives two parameters the htmlTag which is the play button (wrapped with a tag), and the video link
// which we eventually set the href of the a tag to the movie yt url 
const setPlayBtnVideo = (htmlTag, videoLink) => {
  const setVideoUrl = htmlTag.setAttribute('href', videoLink);
  return setVideoUrl;
};

export {setPlayBtnVideo}