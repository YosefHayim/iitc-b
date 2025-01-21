const CommentInput = ({ commentUsername }) => {
  if (!commentUsername) {
    return;
  }

  return (
    <div className="flex items-start">
      <input
        className="mb-[1em] ml-[2.5em] bg-transparent text-[0.8em] text-gray-700 focus:text-white focus:outline-none"
        placeholder={`Reply to ${commentUsername || ""}...`}
      />
    </div>
  );
};

export default CommentInput;
