import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center h-15 border-b-2 border-b-cyan-700 bg-emerald-100">
      <div className="flex items-center ml-2">
        <img className="w-9" src={APP_LOGO} />
        <div className="font-bold text-rose-800 text-2xl ml-4">LocateEats</div>
      </div>
      <div className="text-lg ml-36">Hey there! Taste your delicious food.</div>
      <div className="mr-2">
        <ul className="flex items-center">
          <li className="p-2.5 text-lg">
            Online : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-2.5 text-lg">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2.5 text-lg">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-2.5 text-lg">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="p-2.5 text-lg">
            <Link>Cart</Link>
          </li>
          <button
            className="p-2.5 text-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
