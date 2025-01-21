const UserCommentProfileImg = ({ userCommentProfileImg }) => {
  return (
    <div>
      <img
        src={userCommentProfileImg}
        alt=""
        className="w-[4em] rounded-[100em]"
      />
    </div>
  );
};

export default UserCommentProfileImg;
