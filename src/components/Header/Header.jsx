import styles from "./styles.module.css";
import logo from "../../assets/Header/logo.svg";
import arrow from "../../assets/Header/Down_arrow.svg";
import { useNavigate } from "react-router";

export const Header = () => {
  // navigation
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    navigate(`/${provider}`);
  };

  const handleSignUp = (provider) => {
    navigate(`/${provider}`);
  };

  const handleMain = () => {
    navigate('/')
  }
  // 

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"></img>
          <h1 className={styles.name} onClick={() => handleMain()}>Marico</h1>
        </div>

        <div className={styles.container__button}>
          <div className={styles.buttons}>
            <button className={styles.btn}>
              Use Cases <img src={arrow} alt="arrow"></img>
            </button>
            <button className={styles.btn}>About</button>
            <button className={styles.btn}>Pricing</button>
            <button className={styles.btn}>Blog</button>
          </div>
        </div>

        <div className={styles.registr}>
          <button className={styles.login} onClick={() => handleLogin("login")}>
            Login
          </button>
          <button
            className={styles.signup}
            onClick={() => handleSignUp("signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};
