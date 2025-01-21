import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../../Components/SubmitBtn/SubmitBtn.jsx";
import { GiFlipFlops } from "react-icons/gi";

const inputStyle =
  "rounded-[0.5em] border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme";

const divIconStyle =
  "rounded-[0.5em] cursor-pointer border border-gray-700 bg-[#2c3448] p-[0.6em] pl-[1em] pr-[1em] text-white hover:bg-profileSectionTheme w-full";

const Register = () => {
  const navigate = useNavigate();

  const registerUser = async (userInfo) => {
    const resRegisterUser = await axios.post(
      `http://localhost:3000/api/users/signup`,
      userInfo,
    );

    if (resRegisterUser) {
      console.log(resRegisterUser);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const userInfo = {
      email: formValues.email,
      displayName: formValues.fname,
      username: formValues.username,
      password: formValues.password,
    };

    registerUser(userInfo);
    navigate("/login");
  };

  return (
    <div className="mt-[0.5em] flex flex-col items-center justify-center rounded-[1em] p-[2em] text-white">
      <div className="text-center">
        <div className="flex w-full flex-row items-center justify-center gap-[0.5em] text-[1.3em]">
          <h1>Register</h1>
          <GiFlipFlops />
          <h1>Babagram</h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="mt-[0.5em] flex w-full flex-col gap-[0.5em]"
          >
            <input
              type="text"
              placeholder="Full name"
              id="fname"
              name="fname"
              className={inputStyle}
              required
            />
            <input
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              className={inputStyle}
              required
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className={inputStyle}
              required
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className={inputStyle}
              required
            />
            <input
              type="password"
              placeholder="Re-enter password"
              id="confirm-password"
              name="confirm-password"
              className={inputStyle}
              required
            />
            <div>
              <input type="checkbox" required />
              <label htmlFor="checkbox">
                <Link
                  to="/terms-of-service"
                  className="text-gray-400 hover:text-white"
                >
                  Agree to terms of service
                </Link>
              </label>
            </div>
            <SubmitBtn btnPlaceholder="Register" />
            <Link to="/">
              <button className={divIconStyle}>Back</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
