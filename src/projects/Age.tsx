import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

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
    const count = useSelector((state: any) => state.counter.value);

    return (
        <>
            <button onClick={() => {
                dispatch({ type: 'incremented_age' })
            }}>
                Increment age
            </button>
            <p>Hello! You are {state.age}.</p>
            <h2>The counter shows the value picked from the Redux Counter </h2>
            
            <h3 >The value is: <h2 style={{ color: "red" }}> {count}</h2></h3>
            <Link to="/">Go Home</Link>
        </>
    );
}