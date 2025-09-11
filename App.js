import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="app-logo" src="https://penji.co/wp-content/uploads/2022/08/6.-waiter.com-logo.jpg.webp" />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="image-container">
        <img alt="res-logo" className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/14/c295c926-6758-462a-8c27-eaf113ebe001_558412%20(1).jpg" />
      </div>
      <div className="name-container">
        <p className="name">Geetham Veg Restaurant</p>
        <p className="cuisine">South Indian, North Indian, Tandoori</p>
      </div>
      <div className="details-container">
        <p className="rating">4.5</p>
        <p className="delivery-time">27 MINS</p>
        <p className="amount-for-two">400 FOR TWO</p>
      </div>
    </div>
  );
}

const Body = () => {
  return (
    <div className="main">
      <div className="search-container">
        <input className="search-bar" type="text" placeholder="Search for restaurant, item or more"></input>
        <button className="search-button">
          <img className="search-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-GnQ-qnGAG90kmtY6R_n_uo3YU8eUnmF4Q&s"></img>
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

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