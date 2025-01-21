// Sets the href attribute of the play button (an anchor tag) to the provided YouTube video link.
const setPlayBtnVideo = (htmlTag, videoLink) => {
  const setVideoUrl = htmlTag.setAttribute("href", videoLink);
  return setVideoUrl;
};

export { setPlayBtnVideo };
