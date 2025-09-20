import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantMenuList.json";
import { BrowserRouter } from "react-router";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Cart from "../Cart";

/**
 * --- Add items to cart functionality test ---
 * render the RestaurantMenu component
 * render the Cart component
 * get the accordian header
 * fire click event for accordian header
 * find the add buttons for the items
 * fire click event for the first add button
 * assert the items in Cart component to be 1
 */

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should update the Cart component once we add the items from RestaurantMenu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  // Getting the accordian header for a particular category from the screen
  const accordianHeader = screen.getByText("Dessert (4)");

  // Fire click event for the accordian header to expand it
  fireEvent.click(accordianHeader);

  // Getting all the add button since we will be having multiple items for each category
  const addButtons = screen.getAllByRole("button", { name: "ADD" });

  // Fire click event for the first Add button
  fireEvent.click(addButtons[0]);

  // Assertion - It should be 1 as we clicked only the first item
  expect(screen.getAllByTestId("cartItems").length).toBe(1);

  // Fire click event for the Second Add button
  fireEvent.click(addButtons[1]);

  // Assertion - It should be 2 as we clicked only the first item and second item
  expect(screen.getAllByTestId("cartItems").length).toBe(2);

  // Fire click event on "Clear cart"
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  // Assertion - Check for empty cart message from the Cart screen
  expect(screen.getByText("Cart is empty. Add items to the cart!"));
});
