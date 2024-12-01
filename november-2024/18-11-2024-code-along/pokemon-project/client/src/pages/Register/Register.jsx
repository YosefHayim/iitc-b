import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from "/images/sign-up-page.svg";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [isRegister, setRegister] = useState(false);

  const registerUser = async (registerData) => {
    try {
      const res = await axios.post(
        "https://iitc-b-pokemon-backend.onrender.com/register",
        registerData
      );

      if (res) {
        setRegister(true);
      }
    } catch (error) {
      console.error("Error has been occurred durning registration", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const fName = formData.get("fname");
    const lName = formData.get("lname");

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const registerData = {
      email,
      password,
      fName,
      lName,
    };

    registerUser(registerData);
  };

  return (
    <div>
      <div className={styles.ImageContainer}>
        <img
          src={SignUpImage}
          alt="Pikachu holding a sign to sign up"
          className={styles.SignUpImage}
        />
      </div>
      <div className={styles.RegisterContainer}>
        {isRegister ? (
          navigate("/login")
        ) : (
          <form
            className={styles.RegisterFormContainer}
            onSubmit={handleSubmit}
          >
            <label htmlFor="email">
              <input
                className={styles.BoxInput}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </label>
            <label htmlFor="fname">
              <input
                className={styles.BoxInput}
                type="text"
                name="fname"
                id="fname"
                placeholder="First name"
                required
              />
            </label>
            <label htmlFor="lname">
              <input
                className={styles.BoxInput}
                type="text"
                name="lname"
                id="lname"
                placeholder="Last name"
                required
              />
            </label>
            <label htmlFor="password">
              <input
                className={styles.BoxInput}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </label>
            <label htmlFor="confirmPassword">
              <input
                className={styles.BoxInput}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </label>
            <div className={styles.AgreeToTermsContainer}>
              <label className={styles.AgreeToTerms}>
                <input type="checkbox" name="agreeToTerms" required />
                <span className={styles.IAgreeToThe}>I agree to the</span>
                <Link to="/terms-and-conditions" className={styles.TagLink}>
                  <span>terms and conditions</span>
                </Link>
              </label>
            </div>
            <div className={styles.submitButtonContainer}>
              <button type="submit" className={styles.submitButton}>
                Create Account
              </button>
            </div>
            <div className={styles.UserOptionsContainer}>
              <p className={styles.AlreadyHaveAccount}>
                Already have an account?
                <Link to="/login" className={styles.TagLink}>
                  <span>Login here</span>
                </Link>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
