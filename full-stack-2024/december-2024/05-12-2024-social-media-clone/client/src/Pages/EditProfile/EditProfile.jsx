import { useSelector } from "react-redux";
import FakeProfileImage from "/images/static-profile-image.svg";
import BackPageArrow from "../../Components/BackPageArrow/BackPageArrow";

const inputStyle = "ml-[0.5em] bg-transparent placeholder:text-gray-400";

const EditProfile = () => {
  const userProfileImg = useSelector((state) => state.user.profileImg);
  const displayName = useSelector((state) => state.user.displayName);
  const bio = useSelector((state) => state.user.bio);
  const username = useSelector((state) => state.user.name);
  const userPronouns = useSelector((state) => state.user.pronouns);
  const userLinks = useSelector((state) => state.user.links);
  const userBanners = useSelector((state) => state.user.banners);
  const showThreadsBadge = useSelector((state) => state.user.showThreadsBadge);
  const userGender = useSelector((state) => state.user.gender);

  if (!userProfileImg) {
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInputs = Object.fromEntries(formData);
    console.log(userInputs);
  };

  return (
    <div className="flex w-full flex-col p-[2em] text-white">
      <BackPageArrow />
      <h2 className="text-center">EditProfile</h2>
      <div className="mb-[1em] mt-[0.5em] flex w-full flex-row items-center justify-center gap-[1em]">
        <img src={userProfileImg} alt="" className="w-[20vw] rounded-[100em]" />
        <img
          src={FakeProfileImage}
          alt=""
          className="w-[20vw] rounded-[100em]"
        />
      </div>
      <button>
        <b className="text-blue-600 hover:text-white">Edit picture or avatar</b>
      </button>

      <form className="mt-[0.5em] flex flex-col" onSubmit={handleSubmit}>
        <div className="flex w-full flex-row flex-wrap justify-between">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder={displayName}
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder={username} className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Pronouns">Pronouns</label>
            <input
              type="text"
              placeholder={userPronouns}
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="Bio">Bio</label>
            <input type="text" placeholder={bio} className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Links">Links</label>
            <input type="text" placeholder={userLinks} className={inputStyle} />
          </div>

          <div>
            <label htmlFor="Banners">Banners</label>
            <input
              type="text"
              placeholder={userBanners}
              className={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="Music">Music</label>
            <input
              type="text"
              placeholder="Add music to your profile"
              className={inputStyle}
            />
          </div>

          <div className="flex w-full flex-row-reverse items-center justify-end gap-[0.5em]">
            <input
              type="checkbox"
              name="showThreadsBadge"
              placeholder={showThreadsBadge}
            />
            <label htmlFor="showThreadsBadge">Show Threads Badge</label>
          </div>

          <div>
            <label for="genderOption">Gender</label>
            <select
              id="genderOptions"
              name="genderOptions"
              defaultValue={userGender}
              className={inputStyle}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Custom">Custom</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
