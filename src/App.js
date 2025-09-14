import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";

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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);