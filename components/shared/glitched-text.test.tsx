import { render, screen } from "@testing-library/react";

import { GlitchedText } from "./glitched-text";

test("renders glitched text", () => {
  render(<GlitchedText animate>123</GlitchedText>);

  expect(screen.getByTestId("glitched-text")).toBeInTheDocument();
});
