import styles from "../src/styles/Home.module.scss";

import MyHeader from "../src/components/MyHeader"

export default function Home() {
  return (
    <div className={styles.Home}>
      <MyHeader />
    </div>
  );
}
