const UserPostContent = ({ postContent, postUsername }) => {
  return (
    <div className="flex w-full flex-row justify-start gap-[1em] text-start">
      <div>
        <h2 className="w-full font-CaustenFontBold text-[0.7em]">
          {postUsername}
        </h2>
      </div>
      <div>
        <p className="w-full text-[0.7em]">{postContent}</p>
      </div>
    </div>
  );
};

export default UserPostContent;
