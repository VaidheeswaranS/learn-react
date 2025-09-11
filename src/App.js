import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers.js";
import Body from "./components/Body.js";

// creating <h1> using Core React
const headingCore = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using Core React🚀"
); // this returns a React Object

/**
 * Header
 *  - Logo
 *  - Nav Items
 *    - Home
 *    - About Us
 *    - Contact Us
 *    - Cart
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restaurant Card
 *      - Img
 *      - Name
 *      - Rating
 *      - Cuisine
 *      - Delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);