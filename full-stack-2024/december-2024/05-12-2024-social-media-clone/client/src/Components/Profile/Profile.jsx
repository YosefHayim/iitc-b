import { useEffect, useState } from "react";
import ProfileEditBtns from "./ProfileEditBtns/ProfileEditBtns";
import ProfileActionsBtns from "./ProfileActionsBtns/ProfileActionsBtns";
import ProfileGallerySection from "./ProfileGallerySection/ProfileGallerySection";
import ProfileHeaderNavigation from "./ProfileHeaderNavigation/ProfileHeaderNavigation";
import ProfileImageDisplay from "./ProfileImageDisplay/ProfileImageDisplay";
import ProfileStatsSection from "./ProfileStatsSection/ProfileStatsSection";
import ProfileUserDetails from "./ProfileUserDetails/ProfileUserDetails";
import axios from "axios";
import FooterMenu from "../FooterMenu/FooterMenu";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { setProfilePicUser } from "../../store/slices/userSlice";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  dispatch(setProfilePicUser(userData?.user?.profilePic));

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/api/users/data", {
        withCredentials: true,
      });

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
            <div className="rounded-[1em] bg-profileSectionTheme font-CaustenFont">
              <ProfileHeaderNavigation />
              <div className="flex w-full flex-row items-center justify-center">
                <div className="flex w-full flex-col items-center">
                  <div>
                    <div className="flex w-full flex-row items-center justify-start gap-[1em]">
                      <div className="rounded-full bg-white p-[0.1em]">
                        <div className="rounded-full bg-profileSectionTheme">
                          <ProfileImageDisplay
                            profileImgUrl={userData?.user?.profilePic}
                          />
                        </div>
                      </div>
                      <div>
                        <ProfileUserDetails
                          userName={userData?.user?.username}
                          displayName={userData?.user?.displayName}
                        />
                        <ProfileActionsBtns />
                      </div>
                    </div>
                  </div>
                  <ProfileStatsSection
                    followers={userData?.followers}
                    following={userData?.following}
                    posts={userData?.Posts}
                  />
                </div>
              </div>
              <ProfileEditBtns />
            </div>
            <ProfileGallerySection posts={userData?.Posts} />
            <FooterMenu pageValue={"Profile"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
