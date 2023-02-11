import { useReducer } from 'react';

function reducerFunction(state: any, action: any) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        };
    }
    else {
        return {
            todos: [
                ...state.todos,
                { id: 1, text: "action.text" }
            ]
        };
    }
}

export default function Counter() {
    //The reducer function (reducerFunction) that specifies how the state gets updated. It must be pure, 
    //should take the state and action as arguments, and should return the next state. Create new state
    //The dispatch function returned by useReducer lets you update the state to a different 
    //value and trigger a re-render. Update state and rerender
    const [state, dispatch] = useReducer(reducerFunction, { age: 42 });

    return (
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
        </>
    );
}