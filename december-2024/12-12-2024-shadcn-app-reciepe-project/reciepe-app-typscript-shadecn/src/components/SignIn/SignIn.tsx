import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { pageDefaultStyle } from "../Home/Home";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const SignIn = () => {
  return (
    <div className={pageDefaultStyle}>
      <Logo />
      <div>
        <form className="flex flex-col gap-[0.5em]">
          <Input placeholder="Email / Phone number" />
          <Input placeholder="Password" />
          <Link to="/recipe-page/dashboard">
            <Button>Sign in</Button>
          </Link>
          <p className="text-[0.8em] text-gray-500 hover:text-black">
            <Link to="/forget-pw">
              <button>Forget password?</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
