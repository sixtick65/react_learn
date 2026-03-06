const counterReducer = (state: number, action: counterAction) => {
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
}

export default counterReducer;