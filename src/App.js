import { useState } from "react";
import "./styles.css";
import TodoFind from "./todoFind";
import TodoForm from "./todoForm";
import TodoItem from "./todoItem";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  const addTodo = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        label: userInput,
        done: false
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const haveDone = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    ]);
  };

  const onSearchChange = (event) => {
    setTerm(event);
  };

  const search = (items, str) => {
    if (str) {
      return items.filter((item) => {
        return item.label.toLowerCase().indexOf(str.toLowerCase()) > -1;
      });
    }
    return items;
  };
  const visibleElement = search(todos, term);
  console.log(visibleElement.length);

  return (
    <div className="App">
      <div>
        <h1>Tasks: {todos.length}</h1>

        <TodoForm addTodo={addTodo} />

        {visibleElement.length !== 0 ? (
          visibleElement.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                haveDone={haveDone}
              />
            );
          })
        ) : (
          <h2>Nothing found</h2>
        )}

        {todos.length !== 0 ? (
          <TodoFind onSearchChange={onSearchChange} term={term} />
        ) : null}
      </div>
    </div>
  );
}
