import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

it("should contain the restaurant name in the RestaurantCard component", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Theobroma");

  // Assertion
  expect(restaurantName).toBeInTheDocument();
});
