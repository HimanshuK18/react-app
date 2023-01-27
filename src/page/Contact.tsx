import Mailbox from '../projects/Messages'

const Contact = () => {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return(
  <>
    <Mailbox unreadMessages={messages} />
    <h1>Contact Me</h1>
  </>);
};

export default Contact;