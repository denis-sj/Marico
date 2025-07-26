import styles from "./styles.module.css";
import mobile from "../../../assets/Main/StepTwo/Mobile.svg";
import collect from "../../../assets/Main/StepTwo/Collect.svg";

export const StepTwo = () => {
  return (
    <>
      <section className={styles.cont_for_content}>
        <div className={styles.cont_content}>
          {/* block step 1 */}
          <div className={styles.cont_text_step}>
            <h1>STEP 2</h1>
          </div>

          <div className={styles.cont_text_content}>
            <h1>Share Your Homepage</h1>
          </div>

          <div className={styles.default_text}>
            <p>
              Share your Wavium homepage link with your followers, and we'll
              handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.cont_contentLinkAndSubs}>
        <article className={styles.article_feature}>
          <div className={styles.feature_tag}>
            <p>One Link</p>
          </div>
          <div className={styles.feature_title}>
            <h1>
              All You Create. <strong>One Link</strong>
            </h1>
          </div>
          <div className={styles.feature_image}>
            <img src={mobile} alt="Mobile preview"></img>
          </div>
        </article>

        <article
          className={`${styles.article_feature} ${styles.article_subscribe}`}
        >
          <div className={styles.feature_tag}>
            <p>Collect Subscribers</p>
          </div>
          <div
            className={`${styles.feature_title}${styles.cont_feature_text_email}`}
          >
            <h1 className={styles.feature_text}>Emails.</h1>
            <h1 className={styles.feature_text}>Phone #s.</h1>
            <h1 className={styles.feature_text}><strong>All Yours.</strong></h1>
          </div>
        </article>

        <button className={styles.btn_get_started}>Get Started</button>
      </section>
    </>
  );
};
