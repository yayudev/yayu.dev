import { render, screen } from "@testing-library/react";

import { HomeMenuItem } from "./home-menu-item";

test("renders a link with href", () => {
  render(<HomeMenuItem href="/about">1</HomeMenuItem>);
  const hrefLinkElement = screen.getByTestId("home-menu-item__href-link");
  const onClickLinkElement = screen.queryByTestId("home-menu-item__click-link");

  expect(hrefLinkElement).toBeInTheDocument();
  expect(onClickLinkElement).not.toBeInTheDocument();
});

test("renders a link with onClick", () => {
  render(<HomeMenuItem onClick={() => {}}>1</HomeMenuItem>);
  const hrefLinkElement = screen.queryByTestId("home-menu-item__href-link");
  const onClickLinkElement = screen.getByTestId("home-menu-item__click-link");

  expect(hrefLinkElement).not.toBeInTheDocument();
  expect(onClickLinkElement).toBeInTheDocument();
});
