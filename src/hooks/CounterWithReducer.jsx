import React, {useReducer} from 'react';

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function CounterWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>Count Down</button>
            <button onClick={() => dispatch({type: 'increment'})}>Count Up</button>
        </>
    );
}

export default  CounterWithReducer;