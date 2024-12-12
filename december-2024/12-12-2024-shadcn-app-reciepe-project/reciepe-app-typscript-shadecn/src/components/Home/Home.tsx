import placeholderImg from "../../../public/recipe-page-clone.svg";
import { Button } from "../ui/button";
import { MailIcon } from "../ui/Mail";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const imgSize = "h-[10vh] rounded-[0.5em]";
export const pageDefaultStyle = "flex flex-col p-[1em] font-Halenoir";

const Home = () => {
  return (
    <div className={pageDefaultStyle}>
      <div className="flex flex-row flex-wrap w-full items-center justify-between gap-[0.5em]">
        <img src={placeholderImg} alt="" className={imgSize} />
        <img src={placeholderImg} alt="" className={imgSize} />
        <img src={placeholderImg} alt="" className={imgSize} />
        <img src={placeholderImg} alt="" className={imgSize} />
        <img src={placeholderImg} alt="" className={imgSize} />
        <img src={placeholderImg} alt="" className={imgSize} />
      </div>

      <div>
        <h1 className="text-center mt-[1em] mb-[1em]">
          <b>Elevate your home cooking with our expertly curated recipes</b>
        </h1>
        <div className="flex flex-col w-full text-center gap-[1em]">
          <Button variant="outline">
            <MailIcon /> Sign up with email
          </Button>
          <p className="text-gray-500">or use social media</p>
          <Button variant="outline">
            <FcGoogle />
            Sign up with google
          </Button>
          <Button>
            <FaApple /> Sign up with apple
          </Button>
          <Link to="/sign-in">
            <p className="text-gray-500">
              Already have an account? <b className="text-black">Sign in</b>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
