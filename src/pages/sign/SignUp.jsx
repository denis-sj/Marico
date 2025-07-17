import { Layout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";

export const SignUp = () => {
  return (
    <Layout>
      <div className={styles.page_container}>
        <div className={styles.form_container}>
          {/* header sign up */}
          <div className={styles.form_header}>
            <h1>Sign up</h1>
            <p>Fill all field for create an account.</p>
          </div>
          {/* основная форма */}
          <form className={styles.form_body}>
            {/* контейнер для полей ввода */}
            <div className={styles.input_row}>
              {/* поле для ввода имени */}
              <div className={`${styles.input_group} ${styles.input_username}`}>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.input_field}
                ></input>
              </div>

              {/* поле для ввода password */}
              <div className={`${styles.input_group} ${styles.input_password}`}>
                <input
                  type="password"
                  placeholder="Password"
                  className={styles.input_field}
                ></input>
              </div>
            </div>

            {/* поле для ввода email */}
            <div className={styles.input_row}>
              <div className={`${styles.input_group} ${styles.input_email}`}>
                <input
                  type="email"
                  placeholder="Email Address"
                  className={styles.input_field}
                ></input>
              </div>

              <div className={styles.button_container}>
                <button type="submit" className={styles.submit_btn}>
                  Sign Up
                </button>
              </div>
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
            <button type="button" className={styles.button}>
              Sign up with Apple
            </button>
          </div>
          <div className={`${styles.cont_btn} ${styles.btn_facebook}`}>
            <button type="button" className={styles.button}>
              Sign up with Facebook
            </button>
          </div>
          <div className={`${styles.cont_btn} ${styles.btn_google}`}>
            <button type="button" className={styles.button}>
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
