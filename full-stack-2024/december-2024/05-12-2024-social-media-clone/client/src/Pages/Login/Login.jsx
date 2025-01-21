import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn.jsx";
import { useDispatch } from "react-redux";
import { GiFlipFlops } from "react-icons/gi";
import { setUser } from "../../store/slices/userSlice.js";
import { useState } from "react";

const divIconStyle =
  "rounded-[0.5em] cursor-pointer border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

const divInputStyle =
  "rounded-[0.5em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isWrong, setIsWrong] = useState(false);

  const loginUser = async (userInfo) => {
    try {
      const resLoginData = await axios.post(
        `http://localhost:3000/api/users/login`,
        userInfo,
        { withCredentials: true },
      );

      if (resLoginData) {
        navigate("/posts-feed");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setIsWrong(true);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const userInfo = {
      username: formValues.username,
      password: formValues.password,
    };

    dispatch(setUser(userInfo.username));
    loginUser(userInfo);
  };

  return (
    <div className="mt-[0.5em] flex flex-col items-center justify-center rounded-[1em] p-[2em] text-white">
      <div>
        <div className="mb-[1em] flex w-full flex-row items-center justify-center gap-[1em] text-center">
          <GiFlipFlops />
          <h1 className="text-2xl">Babagram</h1>
        </div>
        <div>
          <form
            onSubmit={handleLoginSubmit}
            className="flex flex-col justify-center gap-[0.5em] text-center"
          >
            <input
              type={"text"}
              placeholder={"Username"}
              id="username"
              name="username"
              className={divInputStyle}
            />
            <input
              type={"password"}
              placeholder={"Password"}
              id="password"
              name="password"
              className={divInputStyle}
            />
            <p className={isWrong ? "text-red-500" : "hidden"}>
              Invalid username or password
            </p>

            <Link to="Coming-soon">
              <p className="cursor-pointer text-start text-xs text-blue-500 hover:text-white">
                Recovery Password
              </p>
            </Link>
            <SubmitBtn btnPlaceholder="login" />
          </form>
        </div>

        <div className="mb-[1em] mt-[1em] flex flex-row items-center justify-center gap-[1em]">
          <div className={divIconStyle}>
            <FcGoogle className="w-full text-3xl" />
          </div>
          <div className={divIconStyle}>
            <FaFacebook className="w-full text-3xl text-blue-500" />
          </div>
          <div className={divIconStyle}>
            <FaApple className="w-full text-3xl" />
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-evenly">
          <p className="text-center text-xs">Not a member?</p>
          <Link to="/register">
            <span className="cursor-pointer text-xs text-blue-500 hover:text-white">
              Register now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
