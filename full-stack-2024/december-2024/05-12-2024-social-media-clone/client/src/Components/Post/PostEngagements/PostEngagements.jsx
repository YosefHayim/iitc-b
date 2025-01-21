const PostEngagements = ({ likeCounts }) => {
  if (likeCounts === 0) {
    likeCounts = "";
  }

  return (
    <div className="w-full text-center font-[0.8em]">
      <button className="w-full text-start text-[0.7em]">
        Liked by user and {`${likeCounts} others`}
      </button>
    </div>
  );
};

export default PostEngagements;
