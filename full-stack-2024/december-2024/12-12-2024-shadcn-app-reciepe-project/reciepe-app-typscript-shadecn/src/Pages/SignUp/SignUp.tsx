import { Link } from "react-router-dom";
import { pageDefaultStyle } from "../Home/Home";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "../../components/Logo/Logo";

const SignUp = () => {
  return (
    <div className={pageDefaultStyle}>
      <Logo />
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
