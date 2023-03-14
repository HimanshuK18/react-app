import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { increment, decrement } from '../redux/store';

function CounterRedux() {
  const count = useSelector((store: any) => store.counter.value);
  const dispatch = useDispatch();

  return (<>
    <div>
    <Link to="/">Go Home</Link>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  </>)
}

export default CounterRedux;
