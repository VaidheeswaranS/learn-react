/**
 * --- Search Functionality ---
 * render body component
 * find the search button
 * find the input button
 * fire the change event to the input button
 * fire the click event to the search button
 * assert the no of restauarant cards
 */

import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantList.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Restaurant cards based on the Search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // find the search button in Body component
  const searchButton = screen.getByRole("button", { name: "Search" });

  // find the Search input box in Body component
  const searchInputBox = screen.getByPlaceholderText(
    "Search for restaurant, item or more"
  );

  // Simulating the typing of "pizza" inside the input box
  fireEvent.change(searchInputBox, { target: { value: "pizza" } });

  // Simulating the click of Search button after typing in input box
  fireEvent.click(searchButton);

  // getting all the elements in the Body component with testid as "resCard"
  const cards = screen.getAllByTestId("resCard"); // the length will change as we are using live data from Swiggy

  // Assertion
  expect(cards.length).toBe(2);
});

/**
 * --- Ratings filter Functionality ---
 * render body component
 * find the ratings button
 * fire the click event to the ratings filter button
 * assert the no of restauarant cards
 */

it("Should render the restaurants with ratings more than or eq to 4.5", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // find the ratings button
  const ratingsFilterButton = screen.getByRole("button", {
    name: "Ratings 4.5+",
  });

  // Fire click event for the ratings filter button
  fireEvent.click(ratingsFilterButton);

  // getting all the elements in the Body component with testid as "resCard"
  const cards = screen.getAllByTestId("resCard"); // the length will change as we are using live data from Swiggy

  // Assertion
  expect(cards.length).toBe(7);
});

/**
 * Delivery time filter functionality
 * find the deliver time button
 * fire the click event to the delivery time filter button
 * assert the no of restauarant cards
 */

it("Should render all the restaurants with delivery time of less than 30 mins", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // find the delivery time filter button
  const deliveryTimeFilterButton = screen.getByRole("button", {
    name: "Delivery Time <30 min",
  });

  // fire click event for delivery time filter button
  fireEvent.click(deliveryTimeFilterButton);

  // getting all the elements in the Body component with testid as "resCard"
  const cards = screen.getAllByTestId("resCard"); // the length will change as we are using live data from Swiggy

  // Assertion
  expect(cards.length).toBe(5);
});
