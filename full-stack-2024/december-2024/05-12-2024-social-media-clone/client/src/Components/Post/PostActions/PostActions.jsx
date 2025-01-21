import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { FaHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

const PostActions = ({ likedPost, savedPost }) => {
  return (
    <div className="IconsContainer flex w-full flex-row items-center justify-start gap-[1em]">
      <div className="group cursor-pointer" data-value="Like">
        <FaHeart
          className={`${
            likedPost ? "text-red-500" : "text-gray-500 group-hover:text-white"
          }`}
        />
      </div>

      <div
        className="cursor-pointer text-gray-500 hover:text-white"
        data-value="Comment"
      >
        <FaRegComment className="" />
      </div>
      <div
        className="cursor-pointer text-gray-500 hover:text-white"
        data-value="Share"
      >
        <RiShareBoxLine className="cursor-pointer text-gray-500 hover:text-white" />
      </div>
      <div className="w-full text-end" data-value="Save Post">
        <TurnedInNotIcon
          className={`${
            savedPost
              ? "cursor-pointer text-blue-600"
              : "cursor-pointer text-gray-500 group-hover:text-white"
          }`}
        />
      </div>
    </div>
  );
};

export default PostActions;
