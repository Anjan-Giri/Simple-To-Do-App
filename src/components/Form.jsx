import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ toDos, setToDos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setToDos([...toDos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
