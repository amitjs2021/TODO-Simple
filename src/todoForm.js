import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Type..." onChange={handleChange} value={userInput} />
      <button>Save</button>
    </form>
  );
};

export default TodoForm;
