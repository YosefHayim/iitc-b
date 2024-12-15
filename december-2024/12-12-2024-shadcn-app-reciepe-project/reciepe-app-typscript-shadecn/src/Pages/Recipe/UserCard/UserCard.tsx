import profileImgPlaceholder from "../../../../public/profile-image-placeholder.svg";
import { BsDot, BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";

const UserCard: React.FC<{ recipeName: string; authorName: string }> = ({
  recipeName,
  authorName,
}) => {
  return (
    <div className="flex flex-row items-center justify-center p-[0.4em] rounded-[1em] shadow-profileUserShadow bg-white transform translate-y-[-15.5em] absolute left-0 w-full">
      <div className="flex flex-col items-start justify-center">
        <h2 className="font-bold">{recipeName}</h2>
        <div className="flex flex-row items-center gap-[0.2em]">
          <img
            src={profileImgPlaceholder}
            alt=""
            className="rounded-[100em] w-[2em]"
          />
          <h2>{authorName}</h2>
          <HiCheckBadge style={{ color: "#29b265", fontSize: "1.5em" }} />
          <BsDot style={{ color: "gray" }} />
          <FaStar style={{ color: "gold" }} />
          <p>4.9</p>
        </div>
      </div>
      <div className="ml-[3em]">
        <BsFillBookmarkHeartFill style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default UserCard;
