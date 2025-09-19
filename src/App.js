import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

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

const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "VaidheeswaranS",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h2>Loading the cart...</h2>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
