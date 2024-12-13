import { Link } from "react-router-dom";
import { pageDefaultStyle } from "../Home/Home";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import logo from "../../../public/logo.svg";
import { Checkbox } from "@/components/ui/checkbox";

const SignUp = () => {
  return (
    <div className={pageDefaultStyle}>
      <div>
        <Link to="/">
          <button>
            <img src={logo} alt="" />
          </button>
        </Link>
      </div>
      <div>
        <form className="flex flex-col gap-[0.5em]">
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone number" />
          <Input placeholder="Password" />
          <Input placeholder="Repeat Password" />
          <div className="flex flex-row justify-start items-center gap-[0.5em]">
            <Checkbox id="terms" />
            <label htmlFor="terms">I accept terms and conditions</label>
          </div>
          <Link to="/recipe-page/dashboard">
            <Button>Sign up</Button>
          </Link>
          <p className="text-[0.8em] text-gray-500 hover:text-black">
            <Link to="/recipe-page/sign-in">
              <button>Already have an account?</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
