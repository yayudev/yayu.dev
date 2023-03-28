import { render, screen } from "@testing-library/react";

import { CloseMenuIcon } from "./close-menu-icon";

test("renders close menu icon", () => {
  render(<CloseMenuIcon />);
  const closeMenuIcon = screen.getByTestId("close-menu-icon");

  expect(closeMenuIcon).toBeInTheDocument();
});

test("should render all three bars", () => {
  render(<CloseMenuIcon />);
  const topBar = screen.getByTestId("close-menu-icon__top");
  const middleBar = screen.getByTestId("close-menu-icon__middle");
  const bottomBar = screen.getByTestId("close-menu-icon__bottom");

  expect(topBar).toBeInTheDocument();
  expect(middleBar).toBeInTheDocument();
  expect(bottomBar).toBeInTheDocument();
  expect(topBar).toHaveStyle("opacity: 0.75");
  expect(middleBar).toHaveStyle("opacity: 0.75");
  expect(bottomBar).toHaveStyle("opacity: 0.75");
});

test("hide the middle bar when active", () => {
  render(<CloseMenuIcon showCloseIcon={true} />);
  const topBar = screen.getByTestId("close-menu-icon__top");
  const middleBar = screen.getByTestId("close-menu-icon__middle");
  const bottomBar = screen.getByTestId("close-menu-icon__bottom");

  expect(topBar).toHaveStyle("opacity: .75");
  expect(middleBar).toHaveStyle("opacity: 0;");
  expect(bottomBar).toHaveStyle("opacity: .75");
});
