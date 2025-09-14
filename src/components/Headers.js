import { useState } from "react";
import { APP_LOGO } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="app-logo" src={APP_LOGO} />
        <div className="app-name">LocateEats</div>
      </div>
      <div className="middle-text-container">
        Hey there! Taste your delicious food.
      </div>
      <div className="nav-items-container">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login-logout-button"
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
