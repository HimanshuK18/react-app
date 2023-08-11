import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { increment } from "../redux/counterSlice";
import { giveEmoji } from "../redux/addEmojiSlice";

function CounterRedux() {
  const count = useSelector((store: any) => store.counter.value);
  const emoji = useSelector((store: any) => store.emoji.emoji);
  const dispatch = useDispatch();
  const Increase = () => {
    dispatch(increment());
    dispatch(giveEmoji());
  }
  const Decrease = () => {
    dispatch(increment());
    dispatch(giveEmoji());
  }
  return (<>
    <div>
      <Link to="/">Go Home</Link>
      <h1>Count: {count}</h1>
      <button onClick={() => Increase()}>+1</button>
      <button onClick={() => Decrease()}>-1</button>
    </div>
    <div dangerouslySetInnerHTML={{__html: emoji}} />
  </>)
}

export default CounterRedux;
