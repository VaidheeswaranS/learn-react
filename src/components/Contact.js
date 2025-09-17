import useOnlineStatus from "../utils/useOnlineStatus";

const Contact = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline. Please check your Internet connection</h1>
    );
  }

  return (
    <div className="contact-us">
      <h1>This is Contact us page</h1>
    </div>
  );
};

export default Contact;
