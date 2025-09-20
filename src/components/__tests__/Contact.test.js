import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Heading should be present in Contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  // Assertion - checking element by role
  expect(heading).toBeInTheDocument();
});

test("Submit button should be present in Contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  // Assertion - checking element by role
  expect(button).toBeInTheDocument();
  /**
   * we can also check with text present in screen like this -
   * const text = screen.getByText("Submit")
   * expect(text).toBeInTheDocument();
   */
});

test("Forms should have input name in Contact component", () => {
  render(<Contact />);

  const placeHolderText = screen.getByPlaceholderText("name");

  // Assertion - checking element with placeholder text for input box
  expect(placeHolderText).toBeInTheDocument();
});

test("Forms should have 2 input boxes in Contact component", () => {
  render(<Contact />);

  const inputFields = screen.getAllByRole("textbox");

  // Assertion - checking all the input boxes
  expect(inputFields.length).toBe(2);
});
