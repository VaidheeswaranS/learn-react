import User from "../components/User"
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-us">
      <h1>This is About us Page</h1>
      <User name={"Vaidheeswaran Srinivasan - function"} location={"Chennai - function"} />
      <UserClass name={"Vaidheeswaran Srinivasan - class"} location={"Chennai - class"} />
    </div>
  );
}

export default About ;