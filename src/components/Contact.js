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
      <h1 className="m-4 text-xl font-bold">Contact Us</h1>
      <div>
        <form className="flex flex-col ml-5">
          <label className="mb-2">Name:</label>
          <input
            className="shadow-lg rounded-lg w-[250px] mb-5 p-2"
            type="text"
            placeholder="name"
          ></input>
          <label className="mb-2">Description:</label>
          <input
            className="shadow-lg rounded-lg w-[250px] mb-5 p-2"
            type="text"
            placeholder="description"
          ></input>
        </form>
        <button className="ml-4 bg-green-400 text-white rounded-lg px-3 py-1 cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
