import SplitText from "../../components/Animated/SplitText/SplitText";
import { Layout } from "../../components/Layout/Layout";
import styles from "./styles.module.css";
import dot from "../../assets/Main/Dot.svg";
import { MainCreator } from "./MainCreator/MainCreator";
export const Main = () => {
  return (
    <Layout>
      <div className={styles.cont_main}>
        <div className={styles.main_text}>
          <SplitText text="Own your audience." />
          <h2>So you don't lose them.</h2>
        </div>

        <div className={styles.default_text}>
          <p>Turn your audience into email and text message subscribers.</p>
        </div>

        <div className={styles.cont_btn}>
          <div className={styles.cont_column_btn}>
            <button className={styles.btn_started} type="button">
              Get Started Now
            </button>
            <button className={styles.btn_view} type="button">
              View A Demo
            </button>
          </div>
        </div>
        <div className={styles.cont_text}>
          <img src={dot} alt="dot"></img>
          <p>
            <strong>1000+</strong> creators have already started
          </p>
        </div>
      </div>

      <MainCreator />
    </Layout>
  );
};
