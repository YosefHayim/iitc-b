const ProfileStatsSection = ({ followers, following, posts }) => {
  return (
    <div className="UserStats mb-[1em] mt-[1em] flex w-full flex-row flex-wrap items-center justify-around gap-[1.5em] text-center">
      <div className="PostsStat">
        <h2 className="text-[1.2em]">{posts?.length}</h2>
        <h4 className="text-[0.8em] text-gray-500">Posts</h4>
      </div>
      <div className="FollowersStat">
        <h2 className="text-[1.2em]">{followers}</h2>
        <h4 className="text-[0.8em] text-gray-500">Followers</h4>
      </div>
      <div className="Following">
        <h2 className="text-[1.2em]">{following}</h2>
        <h4 className="text-[0.8em] text-gray-500">Following</h4>
      </div>
    </div>
  );
};

export default ProfileStatsSection;
