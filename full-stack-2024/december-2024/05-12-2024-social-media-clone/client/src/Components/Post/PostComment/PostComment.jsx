import axios from "axios";
import { useSelector } from "react-redux";
import { LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const PostComment = ({ postUsername, postId }) => {
  const navigate = useNavigate();
  const userProfileImg = useSelector((state) => state.user?.profileImg);

  if (!postUsername) {
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let inputComment = e.target.elements.comment.value;
    if (inputComment.length > 1) {
      postComment(inputComment);
      inputComment = "";
    }
  };

  const postComment = async (inputComment) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/comments/${postId}`,
        {
          content: inputComment,
        },
        { withCredentials: true },
      );

      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.error(`Error occurred while trying to add comment: `, error);
    }
  };

  return (
    <div className="mt-[-0.6em] flex w-full items-start items-center">
      <div className="flex w-full flex-row items-center justify-start">
        <button onClick={() => navigate(`/profile/${postUsername}`)}>
          <img
            src={userProfileImg}
            alt=""
            className="w-[1.8em] rounded-[100em]"
          />
        </button>
        <form onSubmit={handleSubmit}>
          <input
            name="comment"
            className="ml-[0.3em] bg-transparent text-[0.8em] text-gray-700 focus:text-white focus:outline-none"
            placeholder={`Add comment for ${postUsername || ""}`}
          />
        </form>
      </div>
      <button type="submit" className="ml-2">
        <LuSend />
      </button>
    </div>
  );
};

export default PostComment;
