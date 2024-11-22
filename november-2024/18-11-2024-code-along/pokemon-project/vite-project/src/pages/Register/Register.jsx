import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1 className={styles.PageTitle}>Register</h1>
      <div className={styles.RegisterContainer}>
        <form className={styles.RegisterFormContainer}>
          <div className={styles.emailContainer}>
            <label htmlFor="email"></label>
            <input
              className={styles.BoxInput}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.fnameContainer}>
            <label htmlFor="fname"></label>
            <input
              className={styles.BoxInput}
              type="text"
              name="fname"
              id="fname"
              placeholder="First name"
              required
            />
          </div>
          <div className={styles.lnameContainer}>
            <label htmlFor="lname"></label>
            <input
              className={styles.BoxInput}
              type="text"
              name="lname"
              id="lname"
              placeholder="Last name"
              required
            />
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="password"></label>
            <input
              className={styles.BoxInput}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className={styles.confirmPasswordContainer}>
            <label htmlFor="confirmPassword"></label>
            <input
              className={styles.BoxInput}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              required
            />
          </div>
          <label>
            <input type="checkbox" name="agreeToTerms" /> I agree to the terms
            and conditions
          </label>
          <div className={styles.submitButtonContainer}>
            <button type="submit" className={styles.submitButton}>
              Create Account
            </button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className={styles.TagLink}>
            Login here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
