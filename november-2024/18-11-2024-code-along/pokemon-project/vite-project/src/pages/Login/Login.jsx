import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
      <h1>Sign In</h1>
      <form className={styles.LoginFormContainer}>
        <label htmlFor="email"></label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password"></label>
        <input type="password" name="password" id="password" />
        <button type="submit">Submit</button>
        <button type="button">
          <Link to="/forget-pw">Forgot Password?</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
