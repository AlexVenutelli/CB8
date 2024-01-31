import { useEffect, useState } from "react";

import TodoItem from "../todoItem/TodoItem";

import TodoListCSS from "./todoList.module.scss";

const TodoList = () => {
  const [todoListData, setTodoListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoListData(data.todos));
  }, []);

  return (
    <div className={TodoListCSS.TodoList}>
      {todoListData.map((todo) => (
        <TodoItem todoItemData={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
