import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cont_text_signup}>
        <h1>Or</h1>
        <p>Sign up with...</p>
      </div>
      <div className={styles.cont_column}>
        <div className={styles.cont_btn}>
          <button type="button" className={styles.button}>
            Sign up with Apple
          </button>
        </div>
        <div className={styles.cont_btn}>
          <button type="button" className={styles.button}>
            Sign up with Facebook
          </button>
        </div>
        <div className={styles.cont_btn}>
          <button type="button" className={styles.button}>
            Sign up with Google
          </button>
        </div>
      </div>
      <div className={styles.cont_text_login}>
        <p>
          Already have an account? Please <a>Log in</a>.
        </p>
      </div>
    </footer>
  );
};
