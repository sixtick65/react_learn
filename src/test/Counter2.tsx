

const CounterDisplay = ({ count }: { count: number }) => {
    return <p>Count: {count}</p>;
};

const CounterButtons = ({ dispatch }: { dispatch: React.Dispatch<counterAction> }) => {
    return (
        <div className="gap-4">
            <button 
                className="btn bg-amber-500"
                onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</button>
            <button className="btn bg-green-300" onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</button>
            <button className="btn rounded-full bg-primary hover:bg-secondary" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export { CounterDisplay, CounterButtons };   