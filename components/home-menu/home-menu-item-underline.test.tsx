import { render, screen } from "@testing-library/react";

import { HomeMenuItemUnderline } from "./home-menu-item-underline";

test("renders active underline", () => {
  render(<HomeMenuItemUnderline active />);
  const activeUnderline = screen.getByTestId(
    "home-menu-item-underline__active"
  );

  expect(activeUnderline).toBeInTheDocument();
});

test("renders inactive underline", () => {
  render(<HomeMenuItemUnderline active={false} />);
  const inactiveUnderline = screen.getByTestId(
    "home-menu-item-underline__inactive"
  );

  expect(inactiveUnderline).toBeInTheDocument();
});
