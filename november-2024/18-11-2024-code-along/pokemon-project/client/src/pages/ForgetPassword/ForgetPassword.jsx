import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <div>
      <h1 className={styles.PageTitle}>Reset Password via email</h1>
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

          <button type="submit" className={styles.SubmitBtn}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
