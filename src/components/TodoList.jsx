import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ toDos, setToDos }) {
  const sortedList = toDos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedList.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          toDos={toDos}
          setToDos={setToDos}
        />
      ))}
    </div>
  );
}
