import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <div>
      <h1 className={styles.heading}>Reset Password</h1>
      <div className={styles.ForgetPasswordContainer}>
        <form className={styles.ResetPasswordForm}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className={styles.input}
          />
          <label htmlFor="newPassword" className={styles.label}>
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            required
            className={styles.input}
          />
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
