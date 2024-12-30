export default function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter a to do..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        ADD
      </button>
    </header>
  );
}
