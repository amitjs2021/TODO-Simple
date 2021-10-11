const TodoItem = ({ todo, removeTodo, haveDone }) => {
  return (
    <div className="item-todo">
      <div
        className={todo.done ? "item-text strike" : "item-text"}
        onClick={() => haveDone(todo.id)}
      >
        {todo.label}
      </div>
      <div className="item-delete" onClick={() => removeTodo(todo.id)}>
        X
      </div>
    </div>
  );
};

export default TodoItem;
