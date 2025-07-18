import styles from "./styles.module.css";

const Button = ({ width = "100%", ...props }) => {
  return (
    <>
      <button
        className={styles.super_button}
        style={{ "--button-width": width }}
        {...props}
      >
        <span>Sign Up</span>
        <svg fill="none" viewBox="0 0 24 24" className={styles.arrow}>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="currentColor"
            d="M5 12h14M13 6l6 6-6 6"
          />
        </svg>
      </button>
    </>
  );
};

export default Button;
