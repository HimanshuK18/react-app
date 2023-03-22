import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

type Props = {
  showMessage: boolean;
};

const Message: React.FC<Props> = ({ showMessage }) => {
  const [increment, setIncrement] = useState(0);
  let navigation = useNavigate();
  const handleClick = () => {
    setIncrement(increment => increment + 1);
  }
  const handleHome = () => { navigation('/') };
  return (<>
    <div data-testid="content">
      {showMessage ? <p>Hello World!</p> : null}
    </div>
    <br />
    <button data-testid="Button" onClick={handleClick}>Current value {increment}</button>
    <br />
    <button data-testid="Button-Route" onClick={handleHome}>Home</button>
  </>);
};

export default Message;
