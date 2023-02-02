import Mailbox from '../projects/Messages'
import { useState, useEffect } from "react";

const Contact = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return(
  <>
    <Mailbox unreadMessages={messages} />
    <h1>Contact Me</h1>
    <h1>I've rendered {count} times!</h1>
  </>);
};

export default Contact;