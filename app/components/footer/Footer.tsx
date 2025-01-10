import styles from "./footer.module.css";

export default function Footer() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>Anindita</div>
        <div className={styles.text}>Creative thoughts agency © All rights reserved.</div>
      </div>
    );
  }