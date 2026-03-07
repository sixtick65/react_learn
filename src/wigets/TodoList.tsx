// import TodoInput from "../components/TodoInput";
import { useReducer, useState } from "react";
import { XIcon } from "../Icons.tsx";

interface Todo {
  id: symbol;
  text: string;
  completed: boolean;
}

type todoAction = 
    { type: 'ADD_TODO', payload: { text: string } } | 
    { type: 'DELETE_TODO', payload: { id: symbol | number } } | 
    { type: 'TOGGLE_TODO', payload: { id: symbol | number } }; // union type

interface dispatchProps {
    dispatch: React.Dispatch<todoAction>
}



const todoReducer = (state: Todo[], action: todoAction): Todo[] => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Symbol(),
                text: action.payload.text,
                completed: false,
            }]; 
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id);
        case 'TOGGLE_TODO':
            return state.map(todo => 
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
}


export const TodoItem = ( { todo, dispatch } : { todo: Todo, dispatch: React.Dispatch<todoAction> }) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <span>{todo.text}</span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })}>
                <XIcon className="size-6 hover:text-red-500" />
            </button>
        </div>
    );
}

const TodoInput = ( { dispatch } : dispatchProps ) => {
    const [todo, setTodo] = useState<Todo>({
        id: Symbol(),
        text: '',
        completed: false,
    });
  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        className="input input-bordered w-full max-w-xs"
        value={todo.text}
        onChange={(e) => setTodo({ ...todo, text: e.target.value })}
      />
      <button className="btn btn-primary" onClick={() => {
        if (todo.text.trim() === '') return;
        dispatch({ type: 'ADD_TODO', payload: { text: todo.text } });
        setTodo({ id: Symbol(), text: '', completed: false });
      }}>
        추가
      </button>
    </>
  );
};

const TodoList = () => {
    const [todos, dispatch] = useReducer(todoReducer, []); 
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>
            <TodoInput dispatch={dispatch} />
            <div className="">
                {todos.map((todo: Todo) => (
                    <TodoItem todo={todo} dispatch={dispatch} key={todo.id.toString()} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;


