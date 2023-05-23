import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
// based on the work of https://github.com/user97116/react-todo-app
