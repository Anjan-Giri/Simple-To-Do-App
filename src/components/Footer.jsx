import styles from "./footer.module.css";
export default function Footer({ completedToDos, totalToDos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedToDos}</span>
      <span className={styles.item}>Total Todos: {totalToDos}</span>
    </div>
  );
}
