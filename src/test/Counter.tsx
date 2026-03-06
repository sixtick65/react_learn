import { useReducer } from "react";

// 리듀서 예제. 어떤 구조적인 로직이 필요한 경우, useState로는 복잡할 수 있다. 이럴 때 useReducer를 사용하면 좋다.


// useReducr(reducer, initialState) -> [state, dispatch]
const Counter = () => {
    const [count, dispatch] = useReducer((state: number, action: counterAction) => {
        switch (action.type) {
            case 'increment':
                return state + action.payload;
            case 'decrement':
                return state == 0 ? state : state - action.payload;
            case 'reset':
                return 0;
            default:
                throw new Error('Unknown action');
        }
    }, 0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;