import { useNavigate } from "react-router-dom";
import ImageBlockDisplay from "../../ImageBlockDisplay/ImageBlockDisplay";

const ProfileGallerySection = ({ posts }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const btnPostId = e.target.closest("button").className;
    if (btnPostId) {
      navigate(`/view-post/${btnPostId}`);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="mb-12 mt-2 flex w-full flex-row flex-wrap justify-center"
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

export default ProfileGallerySection;
