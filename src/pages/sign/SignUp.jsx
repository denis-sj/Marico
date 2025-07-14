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
            <p>fill all field for create an account.</p>
          </div>
          {/* основная форма */}
          <div className={styles.form_body}>
            <form>
              {/* контейнер для полей ввода */}
              <div className={styles.input_row}>
                {/* поле для ввода имени */}
                <div className={styles.input_group}>
                  <input
                    type="text"
                    placeholder="Username"
                    className={styles.input_field}
                  ></input>
                  <img
                    src={user}
                    alt="user"
                    className={styles.input_icon}
                  ></img>
                </div>

                {/* поле для ввода email */}
                <div className={styles.input_group}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={styles.input_field}
                  ></input>
                  <img
                    src={sign}
                    alt="sign"
                    className={styles.input_icon}
                  ></img>
                </div>
              </div>

              {/* поле для ввода пароля */}
              <div className={styles.input_row}>
                <div className={styles.input_group && styles.password}>
                  <input
                    type="password"
                    placeholder="Password"
                    className={styles.input_field}
                  ></input>
                  <img src={eye} alt="eye" className={styles.input_icon}></img>
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
      </div>
    </main>
  );
};
