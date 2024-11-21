import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className={styles.RegisterContainer}>
      <h1>Register</h1>
      <form className={styles.RegisterFormContainer}>
        <div className={styles.emailContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={styles.fnameContainer}>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First name"
            required
          />
        </div>

        <div className={styles.lnameContainer}>
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last name"
            required
          />
        </div>

        <div className={styles.passwordContainer}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className={styles.confirmPasswordContainer}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className={styles.submitButtonContainer}>
          <button type="submit">Register</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
};

export default Register;
