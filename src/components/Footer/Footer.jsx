import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.cont_text_login}>
        <p>
          Already have an account? Please <a>Log in</a>.
        </p>
      </div>
    </footer>
  );
};
