const SubmitBtn = ({ btnPlaceholder }) => {
  return (
    <div>
      <button
        className="hover:txt-black mt-[0.8em] w-full rounded-[0.5em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme"
        type="submit"
      >
        {btnPlaceholder}
      </button>
    </div>
  );
};

export default SubmitBtn;
