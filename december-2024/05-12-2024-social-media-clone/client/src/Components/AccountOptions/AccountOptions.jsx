import { Link } from "react-router-dom";
import {
  MdOutlineBookmarkBorder,
  MdOutlineArchive,
  MdOutlineLock,
  MdOutlineAccessTime,
  MdOutlineDevices,
  MdPeopleAlt,
  MdCompareArrows,
  MdBlock,
  MdOutlineVisibilityOff,
  MdPersonAdd,
} from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { BiBell } from "react-icons/bi";
import { IoLockClosedOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiFlipFlops } from "react-icons/gi";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OptionTab from "./OptionTabBtn/OptionTab";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { CiAt } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineFontSize } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { BsBellSlash } from "react-icons/bs";
import { TbPhotoVideo } from "react-icons/tb";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { CiMobile3 } from "react-icons/ci";
import { LiaUniversalAccessSolid } from "react-icons/lia";
import { LiaLanguageSolid } from "react-icons/lia";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbHomeShield } from "react-icons/tb";
import { MdSupport } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInbox } from "react-icons/ai";
import { MdOutlineVerified } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import SearchBarInput from "../SearchBarInput/SearchBarInput";
import BackPageArrow from "../BackPageArrow/BackPageArrow";

const lineStyle = "border-[0.001em] border-gray-400";
const h3Style = "p-[0.5em] text-gray-500";

const AccountOptions = () => {
  return (
    <div className="mt-1 flex w-[100vw] flex-col p-[1.5em] text-white">
      <div className="flex flex-col items-start justify-start">
        <div className="flex w-full flex-row items-center justify-between">
          <BackPageArrow />
          <h1 className="mb-[0.5em] mr-[2em] w-full text-center text-white">
            Setting and activity
          </h1>
        </div>
      </div>
      <hr className={lineStyle} />
      <div className="SearchbarContainer mb-[0.5em] flex w-full flex-row items-start justify-around">
        <SearchBarInput />
      </div>
      <div className="YourAccountContainer flex items-center justify-between">
        <div>
          <h3 className={h3Style}>Your account</h3>
        </div>
        <div className="flex items-center gap-[0.5em]">
          <GiFlipFlops />
          <p className={h3Style}>Babagram</p>
        </div>
      </div>
      <Link to="/account-center">
        <div className="AccountCenterContainer mt-[0.5em] flex-col items-start justify-start gap-[0.5em] rounded-[0.2em] p-[0.5em] hover:bg-slate-700">
          <div className="flex flex-col items-center gap-[0.5em]">
            <div className="flex w-full flex-row items-center justify-between gap-[0.5em]">
              <div className="flex flex-row items-center gap-[0.5em]">
                <div>
                  <CgProfile />
                </div>
                <div>
                  <h3>Accounts Center</h3>
                </div>
              </div>
              <div>
                <ArrowForwardIcon />
              </div>
            </div>
            <div>
              <p className={h3Style}>
                Password, security, personal details, ad preferences
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="mb-[0.5em]">
        <p>
          Manage your connected experiences and account settings across Meta
          technologies.
          <Link className="p-[0.5em] text-gray-500 hover:text-white">
            <button>Learn more</button>
          </Link>
        </p>
      </div>
      <hr className={lineStyle} />
      <h2 className={h3Style}>How you use babagram</h2>
      <OptionTab
        icon={<MdOutlineBookmarkBorder />}
        title="Saved"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineArchive />}
        title="Archive"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineArchive />}
        title="Your Activity"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<BiBell />}
        title="Notifications"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<IoTimeOutline />}
        title="Time Management"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Who can see your content</h2>
      <OptionTab
        icon={<IoLockClosedOutline />}
        title="Account Privacy"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdPeopleAlt />}
        title="Close Friends"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdCompareArrows />}
        title="Crossposting"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdBlock />}
        title="Blocked"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineVisibilityOff />}
        title="Hide Story and Live"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>How others can interact with you</h2>
      <OptionTab
        icon={<BiSolidMessageRoundedDots />}
        title="Message and story replies"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<CiAt />}
        title="Tags and Mentions"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<FaRegComment />}
        title="Comments"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<TiArrowSync />}
        title="Sharing"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineLock />}
        title="Restricted"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineAccessTime />}
        title="Limit Interactions"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<AiOutlineFontSize />}
        title="Hidden Words"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdPersonAdd />}
        title="Follow and Invite Friends"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>What you see</h2>
      <OptionTab
        icon={<FaRegStar />}
        title="Favorites"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<BsBellSlash />}
        title="Muted Accounts"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<TbPhotoVideo />}
        title="Suggested Content"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<IoHeartDislikeOutline />}
        title="Like and Share Counts"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Your app and media</h2>
      <OptionTab
        icon={<CiMobile3 />}
        title="Device permissions"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<HiDownload />}
        title="Archiving and downloading"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<LiaUniversalAccessSolid />}
        title="Accessibility and translations"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<LiaLanguageSolid />}
        title="Language"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<BsFillFileEarmarkBarGraphFill />}
        title="Media quality"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineDevices />}
        title="App website permissions"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>For families</h2>
      <OptionTab
        icon={<TbHomeShield />}
        title="App website permissions"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>For professionals</h2>
      <OptionTab
        icon={<VscGraph />}
        title="Account type and tools"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlineVerified />}
        title="Babagram Verified"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Your orders and fundraisers</h2>
      <OptionTab
        icon={<TbHomeShield />}
        title="Fundraisers"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<AiOutlineInbox />}
        title="Orders and payments"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>More info and support</h2>
      <OptionTab
        icon={<MdSupport />}
        title="Help"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdOutlinePrivacyTip />}
        title="Privacy Center"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<IoPersonOutline />}
        title="Account Status"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<MdInfoOutline />}
        title="About"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Also from Babagram</h2>
      <OptionTab
        icon={<FaWhatsapp />}
        title="WhatsApp"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<FaThreads />}
        title="Threads"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab
        icon={<RiFacebookCircleLine />}
        title="Facebook"
        navigateRoute={"/Coming-soon"}
      />
      <hr className={lineStyle} />
      <h2 className={h3Style}>Login</h2>
      <OptionTab
        arrowIcon={<ArrowForwardIcon />}
        title="Add account"
        navigateRoute={"/Coming-soon"}
      />
      <OptionTab title="Log out" navigateRoute={"/login"} />
    </div>
  );
};

export default AccountOptions;
