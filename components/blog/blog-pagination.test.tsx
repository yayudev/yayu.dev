import { render, screen } from "@testing-library/react";

import { BlogPagination } from "./blog-pagination";

test("renders blog pagination", () => {
  render(<BlogPagination />);

  const linkElement = screen.getByTestId("blog-pagination");
  expect(linkElement).toBeInTheDocument();
});

test("renders blog pagination with prevUrl", () => {
  render(<BlogPagination prevUrl="/blog/1" />);
  const linkElement = screen.getByTestId("blog-pagination__prev-link");

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/blog/1");
});

test("renders blog pagination with nextUrl", () => {
  render(<BlogPagination nextUrl="/blog/2" />);
  const linkElement = screen.getByTestId("blog-pagination__next-link");

  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute("href", "/blog/2");
});

test("render a separator between prev and next links", () => {
  render(<BlogPagination prevUrl="/blog/1" nextUrl="/blog/2" />);
  const separatorElement = screen.getByTestId("blog-pagination__separator");

  expect(separatorElement).toBeInTheDocument();
});

test("It doesn't render a separator when there is no prev link", () => {
  render(<BlogPagination nextUrl="/blog/2" />);
  const separatorElement = screen.queryByTestId("blog-pagination__separator");

  expect(separatorElement).not.toBeInTheDocument();
});

test("It doesn't render a separator when there is no next link", () => {
  render(<BlogPagination prevUrl="/blog/1" />);
  const separatorElement = screen.queryByTestId("blog-pagination__separator");

  expect(separatorElement).not.toBeInTheDocument();
});
