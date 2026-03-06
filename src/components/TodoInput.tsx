

const TodoInput = ({ todo, setTodo, onAddTodo }: { todo: Todo; setTodo: React.Dispatch<React.SetStateAction<Todo>>; onAddTodo: () => void }) => {
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        className="input input-bordered w-full max-w-xs"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      />
      <button className="btn btn-primary" onClick={onAddTodo}>
        추가
      </button>
    </>
  );
};

export default TodoInput;