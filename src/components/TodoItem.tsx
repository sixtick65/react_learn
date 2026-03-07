type todoAction = 
    { type: 'ADD_TODO', payload: { text: string } } | 
    { type: 'DELETE_TODO', payload: { id: symbol | number } } | 
    { type: 'TOGGLE_TODO', payload: { id: symbol | number } }; // union type

interface dispatchProps {
    dispatch: React.Dispatch<todoAction>
}

export const TodoItem = ({ dispatch } : dispatchProps) => {
    return (
        <div className="flex items-center justify-between p-4 border-b">
            <span>Todo Item</span>
            <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: 1 } })} className="text-red-500 hover:text-red-700">
                Delete
            </button>
        </div>
    );
}   