import TodoItemCSS from "./todoItem.module.scss";

const TodoItem = ({ todoItemData }) => {
  const { todo, completed } = todoItemData;
  return (
    <div className={TodoItemCSS.TodoItem}>
      <input
        className={TodoItemCSS.checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => {}}
      />
      <p className="todo">{todo}</p>
    </div>
  );
};

export default TodoItem;
