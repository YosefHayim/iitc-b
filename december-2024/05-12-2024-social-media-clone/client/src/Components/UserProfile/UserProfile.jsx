import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserProfileEditBtns from "./UserProfileEditBtns/UserProfileEditBtns.jsx";
import UserProfileActionsBtns from "./UserProfileActionsBtns/UserProfileActionsBtns.jsx";
import UserProfileGallerySection from "./UserProfileGallerySection/UserProfileGallerySection.jsx";
import UserProfileHeaderNavigation from "./UserProfileHeaderNavigation/UserProfileHeaderNavigation.jsx";
import UserProfileImageDisplay from "./UserProfileImageDisplay/UserProfileImageDisplay.jsx";
import UserProfileStatsSection from "./UserProfileStatsSection/UserProfileStatsSection.jsx";
import UserProfileDetails from "./UserProfileDetails/UserProfileDetails.jsx";
import axios from "axios";
import FooterMenu from "../FooterMenu/FooterMenu";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProfilePicUser } from "../../store/slices/userSlice";
import BackPageArrow from "../BackPageArrow/BackPageArrow.jsx";

const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/users/data/${username}`,
        {
          withCredentials: true,
        },
      );

      setUserData(data);
    } catch (error) {
      console.error(`Error has occurred durning fetching API: `, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="p-[0.5em] text-white">
            <div className="rounded-[1em] bg-profileSectionTheme">
              <Link to="/search">
                <button>
                  <BackPageArrow />
                </button>
              </Link>
              <div className="flex w-full flex-row items-center justify-center">
                <div className="flex w-full flex-col items-center">
                  <div>
                    <div className="flex w-full flex-row items-center justify-start gap-[1em]">
                      <div className="rounded-full bg-white p-[0.1em]">
                        <div className="rounded-full bg-profileSectionTheme">
                          <UserProfileImageDisplay
                            profileImgUrl={userData?.user?.profilePic}
                          />
                        </div>
                      </div>
                      <div>
                        <UserProfileDetails
                          userName={userData?.user?.username}
                          displayName={userData?.user?.displayName}
                        />
                        <UserProfileActionsBtns />
                      </div>
                    </div>
                  </div>
                  <UserProfileStatsSection
                    followers={userData?.followers}
                    following={userData?.following}
                    posts={userData?.Posts}
                  />
                </div>
              </div>
            </div>
            <UserProfileGallerySection posts={userData?.Posts} />
            <FooterMenu pageValue={"Profile"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
