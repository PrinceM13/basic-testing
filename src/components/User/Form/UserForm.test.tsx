import "@testing-library/jest-dom"; // * this is required for typescript

import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

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

test("it calls the onSubmit function when the form is submitted", async () => {
  // * setup
  const name = "John Doe";
  const email = "John@Doe.com";
  const mockSubmit = jest.fn();

  // * part 1: render the component
  render(<UserForm onSubmit={mockSubmit} />);
  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");
  const button = screen.getByRole("button");

  // * part 2: munipulate the component
  await user.type(nameInput, name);
  await user.type(emailInput, email);
  button.click();

  // * part 3: assertion
  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({ name, email });

  // * cleanup
  mockSubmit.mockClear();
});
