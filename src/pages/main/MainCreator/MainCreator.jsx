import styles from "./styles.module.css";
import smile from "../../../assets/Main/MainCreator/Smile_emoji.svg";
import happy from "../../../assets/Main/MainCreator/Happy_emoji.svg";
import party from "../../../assets/Main/MainCreator/Party_emoji.svg";
import base from "../../../assets/Main/MainCreator/Base.svg";
import content from "../../../assets/Main/MainCreator/Image.svg";

export const MainCreator = () => {
  return (
    <div className={styles.cont_MainCreator}>
      {/* Hero section */}
      <section className={styles.cont_text}>
        <h1>Why Creators Love Marico</h1>
      </section>

      {/* Преимущества  */}
      <section className={styles.cont_creators}>
        <div className={styles.cont_columnCreators}>
          <article className={styles.creators}>
            {/* one */}
            <div className={styles.creators_info}>
              <img src={smile} alt="smile" loading="lazy"></img>
              <h2>Reduced Anxiety</h2>
            </div>
            <p>Never worry about losing your audience.</p>
          </article>

          {/* two */}
          <article className={styles.creators}>
            <div className={styles.creators_info}>
              <img src={happy} alt="happe" loading="lazy"></img>
              <h2>Lower Workload</h2>
            </div>
            <p>Just share one link. We'll handle the rest.</p>
          </article>
          {/* three */}
          <article className={styles.creators}>
            <div className={styles.creators_info}>
              <img src={party} alt="party" loading="lazy"></img>
              <h2>More time</h2>
            </div>
            <p>Spend less time on marketing tools</p>
          </article>
        </div>
      </section>

      {/* Контент секция */}
      <section className={styles.cont_for_content}>
        <div className={styles.cont_content}>
          {/* block step 1 */}
          <div className={styles.cont_text_step}>
            <h1>STEP 1</h1>
          </div>

          <div className={styles.cont_text_content}>
            <h1>Connect Your Content</h1>
          </div>

          <div className={styles.default_text}>
            <p>
              Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.
            </p>
          </div>

          <div className={styles.cont_btn_source}>
            <button
              className={styles.btn_view}
              aria-label="View available sources"
            >
              View Avaliable Sources
            </button>
          </div>
        </div>
      </section>

{/* homePage */}
      <div className={styles.cont_homePage}>
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
    </div>
  );
};
