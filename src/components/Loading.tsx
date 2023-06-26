import styles from "../styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <section className={styles.dots_container}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </section>
    </div>
  );
}
