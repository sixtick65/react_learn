import TodoInput from "../components/TodoInput";
import { useState } from "react";
import { DeleteIcon, PencilIcon } from "../Icons.tsx";


const TodoList = () => {
    const [todo, setTodo] = useState<Todo>({
        id: Symbol(),
        text: '',
        completed: false,
    });
    const [todos, setTodos] = useState<Todo[]>([]); // TODO 리스트는 Ref로 변경해야함
    const handleAddTodo = () => {
        if (todo.text.trim() === '') return; // 빈 문자열은 추가하지 않음

        setTodos([...todos, todo]); // 기존 할 일 목록에 새 할 일 추가
        setTodo({ id: Symbol(), text: '', completed: false }); // 입력 필드 초기화
    };
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>
            <TodoInput todo={todo} setTodo={setTodo} onAddTodo={handleAddTodo} />
            <div className="">
                {todos.map((todo: Todo) => (
                    <div className="flex items-center justify-between border m-4 rounded-full p-2" id={todo.id.toString()}>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox checkbox-primary mr-2" checked={todo.completed} onChange={() => {
                                setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
                            }} />
                            <span>{todo.text}</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="icon hover:text-primary" >
                                <PencilIcon className="size-6" />
                            </button>
                            <button className="icon hover:text-primary" onClick={() => {
                                setTodos(todos.filter(t => t.id !== todo.id));
                            }}>
                                <DeleteIcon className="size-6" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;


