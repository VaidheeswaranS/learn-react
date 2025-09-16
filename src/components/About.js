import User from "../components/User"
import UserClass from "./UserClass";
import useOnlineStatus from "../utils/useOnlineStatus";

const About = () => {
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false ) {
    return (
      <h1>Looks like you're offline. Please check your Internet connection</h1>
    );
  }
  
  return (
    <div className="about-us">
      <h1>This is About us Page</h1>
      <User name={"Vaidheeswaran Srinivasan - function"} location={"Chennai - function"} />
      <UserClass name={"Vaidheeswaran Srinivasan - class"} location={"Chennai - class"} />
    </div>
  );
}

export default About ;