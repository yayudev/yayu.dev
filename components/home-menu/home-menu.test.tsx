import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

import { HomeMenu } from "./home-menu";

test("renders the home menu", () => {
  render(<HomeMenu />);
  const homeMenu = screen.getByTestId("home-menu");

  expect(homeMenu).toBeInTheDocument();
});

test("should render the close menu icon if not on the home page", () => {
  mockRouter.push("/about");

  render(<HomeMenu />);
  const closeMenuIcon = screen.getByTestId("close-menu-icon");

  expect(closeMenuIcon).toBeInTheDocument();
});

test("should not render the close menu icon if on the home page", () => {
  mockRouter.push("/");

  render(<HomeMenu />);
  const closeMenuIcon = screen.queryByTestId("close-menu-icon");

  expect(closeMenuIcon).not.toBeInTheDocument();
});
