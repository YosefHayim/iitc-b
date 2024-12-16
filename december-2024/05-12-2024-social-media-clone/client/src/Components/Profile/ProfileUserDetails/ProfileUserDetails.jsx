const ProfileUserDetails = ({ userName, displayName }) => {
  return (
    <div className="UsernameNTagContainer flex flex-col">
      <h2 className="text-[1.5em]">{userName || "User"}</h2>
      <h4 className="mb-[0.5em] cursor-pointer text-[0.8em] text-gray-500 hover:text-white">
        @{userName || "User"}
      </h4>
    </div>
  );
};

export default ProfileUserDetails;
