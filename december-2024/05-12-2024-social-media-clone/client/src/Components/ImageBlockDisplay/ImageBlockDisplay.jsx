const ImageBlockDisplay = ({ post }) => {
  return (
    <div className="m-[0.1em] flex w-[30vw] flex-row flex-wrap text-white">
      <img src={post.postImageUrl} alt="imgBlockDisplay" />
    </div>
  );
};

export default ImageBlockDisplay;
