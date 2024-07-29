import styles from "./todoitem.module.css";
export default function TodoItem({ item, toDos, setToDos }) {
  function handleDelete(item) {
    console.log("clicked for", item);
    setToDos(toDos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = toDos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setToDos(newArray);
  }
  const check = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={check} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.dltButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
