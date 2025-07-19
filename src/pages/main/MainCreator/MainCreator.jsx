import styles from "./styles.module.css";
import smile from "../../../assets/Main/MainCreator/Smile_emoji.svg";
import happy from "../../../assets/Main/MainCreator/Happy_emoji.svg";
import party from "../../../assets/Main/MainCreator/Party_emoji.svg";

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
    </div>
  );
};
