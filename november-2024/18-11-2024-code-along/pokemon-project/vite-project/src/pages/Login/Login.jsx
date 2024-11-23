import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className={styles.PageTitle}>Sign in</h1>
      <div className={styles.LoginContainer}>
        <form className={styles.LoginFormContainer}>
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
          <button type="submit" className={styles.SubmitButton}>
            Continue
          </button>
          <div className={styles.userOptionsContainer}>
            <button type="button" className={styles.ForgetPasswordButton}>
              <Link to="/forget-password" className={styles.TagLink}>
                Forgot Password?
              </Link>
            </button>
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
