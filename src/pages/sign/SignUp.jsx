import styles from "./styles.module.css";
import user from "../../assets/SignUp/User.svg";
import sign from "../../assets/SignUp/At_sign.svg";
import eye from "../../assets/SignUp/Eye.svg";

export const SignUp = () => {
  return (
    <main className={styles.main}>
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
      </div>
    </main>
  );
};
