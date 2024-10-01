import { screen, render } from "@testing-library/react";
// import user from "@testing-library/user-event";

import "@testing-library/jest-dom"; // * this is required for typescript

import UserForm from ".";

test("it shows two input fields and a submit button", () => {
  // * part 1: render the component
  render(<UserForm onSubmit={() => {}} />);

  // * part 2: munipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // * part 3: assertion - make sure the component is doing what it is supposed to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
