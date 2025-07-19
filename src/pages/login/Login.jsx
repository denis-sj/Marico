import Button from "../../components/Animated/Button/Button";
import SplitText from "../../components/Animated/SplitText/SplitText";
import { Layout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";

export const Login = () => {
  const handleApple = () => {
    window.location.href = "https://www.apple.com";
  };

  const handleGoogle = () => {
    window.location.href = "https://www.google.com";
  };
  const handleFacebook = () => {
    window.location.href = "http://facebook.com";
  };

  return (
    <Layout>
      <div className={styles.page_container}>
        <div className={styles.form_container}>
          {/* text sign up */}
          <div className={styles.form_header}>
            <SplitText text ="Login"/>
            <p>Login into existing account.</p>
          </div>

          {/* основная форма */}
          <form className={styles.form_body}>
            {/* контейнер для полей ввода */}
            <div className={styles.input_row}>
              {/* поле для ввода имени */}
              <div className={`${styles.input_group} ${styles.input_username}`}>
                <input
                  placeholder="Username"
                  className={styles.input_field}
                ></input>
              </div>

              {/* поле для ввода password */}
              <div className={`${styles.input_group} ${styles.input_password}`}>
                <input
                  placeholder="Password"
                  className={styles.input_field}
                ></input>
              </div>
            </div>

            {/* button */}
            <div className={styles.button_container}>
              <Button width="50%" />
            </div>
          </form>
        </div>

        {/* footer */}
        <div className={styles.cont_text_signup}>
          <h1>Or</h1>
          <p>Sign up with...</p>
        </div>
        <div className={styles.cont_column}>
          <div className={`${styles.cont_btn} ${styles.btn_apple}`}>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleApple()}
            >
              Sign up with Apple
            </button>
          </div>
          <div className={`${styles.cont_btn} ${styles.btn_facebook}`}>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleFacebook()}
            >
              Sign up with Facebook
            </button>
          </div>
          <div className={`${styles.cont_btn} ${styles.btn_google}`}>
            <button
              type="button"
              className={styles.button}
              onClick={() => handleGoogle()}
            >
              Sign up with Google
            </button>
          </div>
        </div>
        <p className={styles.text_login}>
          Already have an account? Please <a>Log in</a>.
        </p>
      </div>
    </Layout>
  );
};
