import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("When show the button, its need have the 3 props", () => {
  render(<Button />);

  const action = screen.getByRole("button");
  fireEvent.click(action);

  expect(action).toBeCalled();
});
