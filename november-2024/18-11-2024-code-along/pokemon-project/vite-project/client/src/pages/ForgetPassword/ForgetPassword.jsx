import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <div>
      <h1 className={styles.PageTitle}>Reset Password</h1>
      <div className={styles.ForgetPasswordContainer}>
        <form className={styles.ResetPasswordForm}>
          <label htmlFor="email" className={styles.label}></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            required
            className={styles.BoxInput}
          />
          <label htmlFor="newPassword" className={styles.label}></label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            required
            className={styles.BoxInput}
          />
          <label htmlFor="confirmPassword" className={styles.label}></label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            required
            className={styles.BoxInput}
          />
          <button type="submit" className={styles.SubmitBtn}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
