import imgOne from "../../../public/image-1.svg";
import imgTwo from "../../../public/image-2.svg";
import imgThree from "../../../public/image-3.svg";
import imgFour from "../../../public/image-4.svg";
import imgFive from "../../../public/image-5.svg";
import imgSix from "../../../public/image-6.svg";
import imgSeven from "../../../public/image-7.svg";

import { Button } from "../ui/button";
import { MailIcon } from "../ui/Mail";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const imgSize = "rounded-[1em]";
export const pageDefaultStyle =
  "flex flex-col p-[1em] font-Halenoir justify-center";

const Home = () => {
  return (
    <div className={pageDefaultStyle}>
      <div className="flex flex-row flex-wrap gap-[0.5em]">
        <div className="grid grid-cols-3 gap-[0.5em]">
          <img src={imgOne} alt="" className={imgSize} />
          <img src={imgTwo} alt="" className={imgSize} />
          <img src={imgThree} alt="" className={imgSize} />
        </div>
        <div className="grid grid-cols-4 gap-[0.5em] ">
          <img src={imgFour} alt="" className={imgSize} />
          <img src={imgFive} alt="" className={imgSize} />
          <img src={imgSix} alt="" className={imgSize} />
          <img src={imgSeven} alt="" className={imgSize} />
        </div>
      </div>

      <div>
        <h1 className="text-center mt-[1em] mb-[1em]">
          <b>
            Elevate your home <br></br>cooking with our expertly <br></br>
            curated recipes!
          </b>
        </h1>
        <div className="flex flex-col w-full text-center gap-[1em]">
          <Button variant="outline">
            <MailIcon /> Sign up with email
          </Button>
          <p className="text-gray-500 text-[0.8em]">or use social media</p>
          <Button variant="outline">
            <FcGoogle />
            Sign up with Google
          </Button>
          <Button>
            <FaApple /> Sign up with Apple
          </Button>
          <Link to="/sign-in">
            <p className="text-gray-500 text-[0.8em]">
              Already have an account? <b className="text-black">Sign in</b>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
