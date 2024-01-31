import AddTodoInput from "./components/AddTodoInput/AddTodoInput";
import TodoList from "./components/TodoList/TodoList";
import "./App.scss";

const initialTodoListData = [];

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo-List</h1>
      <AddTodoInput />
      <TodoList initialTodoListData={initialTodoListData} />
    </div>
  );
}

export default App;
