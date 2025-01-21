import { useNavigate } from "react-router-dom";
import ImageBlockDisplay from "../../ImageBlockDisplay/ImageBlockDisplay";

const UserProfileGallerySection = ({ posts }) => {
  const navigate = useNavigate();

  if (!posts) {
    return;
  }

  const handleClick = (e) => {
    const buttonPostId = e.target.closest("button").className;
    if (buttonPostId) {
      navigate(`/view-post/${buttonPostId}`);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="mb-12 mt-2 grid w-full grid-cols-3 justify-center gap-[0.2em]"
      >
        {posts &&
          posts.map((post) => (
            <button key={post._id} className={post._id}>
              <ImageBlockDisplay post={post} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default UserProfileGallerySection;
