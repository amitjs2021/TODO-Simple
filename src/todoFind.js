const TodoFind = ({ onSearchChange, term }) => {
  const handleChange = (e) => {
    onSearchChange(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form style={{ marginTop: "10px" }} onSubmit={handleSubmit}>
      <input placeholder="Search..." onChange={handleChange} value={term} />
    </form>
  );
};

export default TodoFind;
