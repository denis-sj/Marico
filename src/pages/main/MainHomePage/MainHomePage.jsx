import styles from "./styles.module.css";
import base from "../../../assets/Main/MainHomePage/Base.svg";
import content from "../../../assets/Main/MainHomePage/Image.svg";

export const MainHomePage = () => {
  return (
    <div className={styles.cont_main}>
      <section className={styles.homePage}>
        <div className={styles.cont_text_homePage}>
          <h2>Your Homepage</h2>
        </div>

        <div className={styles.cont_text_main}>
          <h1>
            Your Content. All in <strong>One Spot</strong>
          </h1>
        </div>

        <div className={styles.content_info}>
          <div className={styles.cont_text_for_info}>
            <div className={styles.image_wrapper}>
              <img src={base} alt="base"></img>
              <span className={styles.img_number}>1</span>
            </div>
            <p>Bring all of your content together into one homepage.</p>
          </div>

          <div className={styles.cont_text_for_info}>
            <div className={styles.image_wrapper}>
              <img src={base} alt="base"></img>
              <span className={styles.img_number}>2</span>
            </div>
            <p>Your page automatically updates whenever you create.</p>
          </div>
        </div>

        <div className={styles.cont_btn}>
          <button className={styles.btn_started}>Get Started Now</button>
          <button className={styles.btn_view}>View A Demo</button>
        </div>
      </section>

      <section className={styles.image}>
        <img src={content} alt="content"></img>
      </section>
    </div>
  );
};

