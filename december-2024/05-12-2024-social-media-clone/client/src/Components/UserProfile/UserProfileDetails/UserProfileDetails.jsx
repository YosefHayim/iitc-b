const UserProfileUserDetails = ({ userName, displayName }) => {
  const handleClick = (e) => {
    const btnText = e.target.closest("button").value;
    if (btnText) {
      console.log(btnText);
    }
  };

  return (
    <div className="UsernameNTagContainer flex flex-col" onClick={handleClick}>
      <h2 className="text-[1.5em]">{userName || "User"}</h2>
      <button className="mb-[0.5em] cursor-pointer text-[0.8em] text-gray-500 hover:text-white">
        @{userName || "User"}
      </button>
    </div>
  );
};

export default UserProfileUserDetails;
