import styles from "./styles.module.css";
import styled from "styled-components";

const Button = () => {
  return (
    <>
      <button className={styles.super_button}>
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
