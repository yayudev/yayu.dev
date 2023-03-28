import { render, screen } from "@testing-library/react";

import { Loader } from "./loader";

test("renders glitched text", () => {
  render(<Loader />);

  expect(screen.getByTestId("loader")).toBeInTheDocument();
});
