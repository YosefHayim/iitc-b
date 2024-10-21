const setPlayBtnVideo = (htmlTag, videoLink) => {
  const setVideoUrl = htmlTag.setAttribute('href', videoLink);
  return setVideoUrl;
};

export {setPlayBtnVideo}