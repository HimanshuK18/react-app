import { useCallback, useState, useMemo } from 'react';
import React from 'react';

type ButtonComponentProps = {
    handleClick: () => void;
    name: string;
}
const Button = React.memo((props: ButtonComponentProps) => {
    console.log(`${props.name} rendered`)
    return <button onClick={props.handleClick}>{props.name}</button>
})
//useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)
const CounterMemorized = () => {
    console.log('counter rendered');
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    useMemo(() => { 
        console.log('hello'); }, 
        []);
    const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
    const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])
    return (
        <>
            {countOne} {countTwo}
            <Button handleClick={memoizedSetCountOne} name="button1" />
            <Button handleClick={memoizedSetCountTwo} name="button1" />
        </>
    )
}

export default CounterMemorized;