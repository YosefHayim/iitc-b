const UserProfileActionsBtns = () => {
  return (
    <div className="ButtonsContainer flex w-full flex-row items-center justify-center gap-[1em]">
      <button class="cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] pb-[0.3em] pl-[0.9em] pr-[0.9em] pt-[0.4em] text-[0.8em] text-white hover:bg-profileSectionTheme">
        Following
      </button>
      <button class="cursor-pointer rounded-[100em] border border-gray-700 bg-[#2c3448] pb-[0.3em] pl-[0.9em] pr-[0.9em] pt-[0.4em] text-[0.8em] text-white hover:bg-profileSectionTheme">
        Message
      </button>
    </div>
  );
};

export default UserProfileActionsBtns;
