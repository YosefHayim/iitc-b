import styles from "./Login.module.css";
import LoginImage from "/public/images/login-image.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const user = useSelector((state) => state.user);

  const loginUser = async (loginData) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/users/login",
        loginData
      );

      if (res) {
        const token = res.data.token;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        Cookies.set(("token", `${token}`, { expires: 1 / 24 }));
        setLogin(true);
      }
    } catch (error) {
      console.error("Error has been occurred durning login", error);
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const loginData = {
      email,
      password,
    };

    loginUser(loginData);
  };

  return (
    <div>
      <div className={styles.ImageContainer}>
        <img
          src={LoginImage}
          alt="Pikachu waving hello"
          className={styles.PikachuImage}
        />
      </div>
      <h1 className={styles.PageTitle}>Sign in</h1>
      <h1>Hello {user?.email}</h1>
      <div className={styles.LoginContainer}>
        <form
          className={styles.LoginFormContainer}
          onSubmit={handleSubmitLogin}
        >
          <label htmlFor="email" className={styles.TitlesInput}></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className={styles.EmailInput}
          />
          <label htmlFor="password" className={styles.TitlesInput}></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={styles.PasswordInput}
          />
          <button type="button" className={styles.ForgetPasswordButton}>
            <Link to="/forget-password" className={styles.TagLink}>
              Forgot Password?
            </Link>
          </button>
          <button type="submit" className={styles.SubmitButton}>
            Login
          </button>
          <div className={styles.userOptionsContainer}>
            <button className={styles.RegisterButton}>
              <Link to="/register" className={styles.TagLink}>
                First time?
                <span className={styles.RegisterHere}> Register here.</span>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
