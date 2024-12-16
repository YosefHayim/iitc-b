import Loader from "../../Loader/Loader";

const PostImage = ({ postImage }) => {
  if (!postImage) {
    return <Loader />;
  }
  return (
    <div className="postImageContainer flex flex-col">
      <img src={postImage} alt="" className="rounded-[0em]" />
    </div>
  );
};

export default PostImage;
