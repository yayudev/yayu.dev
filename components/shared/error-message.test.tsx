import { render, screen } from "@testing-library/react";

import { ErrorMessage } from "./error-message";

test("renders error message", () => {
  render(<ErrorMessage title="Error" message="Something went wrong" />);

  expect(screen.getByTestId("error-message")).toBeInTheDocument();
});

test("renders error message title", () => {
  render(<ErrorMessage title="Error" message="Something went wrong" />);

  expect(screen.getByTestId("error-message__title")).toBeInTheDocument();
  expect(screen.getByTestId("error-message__title")).toHaveTextContent("Error");
});

test("renders error message text", () => {
  render(<ErrorMessage title="Error" message="Something went wrong" />);

  expect(screen.getByTestId("error-message__text")).toBeInTheDocument();
  expect(screen.getByTestId("error-message__text")).toHaveTextContent(
    "Something went wrong"
  );
});
