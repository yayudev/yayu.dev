import { render, screen } from "@testing-library/react";

import { HomeMenuList } from "./home-menu-list";

test("renders menu list", () => {
  render(<HomeMenuList />);
  const menuList = screen.getByTestId("home-menu-list");

  expect(menuList).toBeInTheDocument();
});

test("renders menu list items", () => {
  render(<HomeMenuList />);
  const menuItems = screen.getAllByTestId(/home-menu-item__(.*)-link/);

  expect(menuItems).toHaveLength(4);
});
