import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [toDos, setToDos] = useState([]);
  const completedToDos = toDos.filter((todo) => todo.done).length;
  const totalToDos = toDos.length;
  return (
    <div>
      <Form toDos={toDos} setToDos={setToDos} />
      <TodoList toDos={toDos} setToDos={setToDos} />
      <Footer completedToDos={completedToDos} totalToDos={totalToDos} />
    </div>
  );
}
