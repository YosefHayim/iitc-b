import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Reset Password</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
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
        </div>

        <div className={styles.inputGroup}>
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
        </div>

        <div className={styles.inputGroup}>
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
        </div>

        <button type="submit" className={styles.submitBtn}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
