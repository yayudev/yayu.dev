import { fireEvent, render, screen } from "@testing-library/react";

import { BlogSocialShareButtons } from "./blog-social-share-buttons";

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders correctly", () => {
  render(<BlogSocialShareButtons url="https://example.com" />);
});

test("twitter button work", () => {
  const windowOpenSpy = jest
    .spyOn(window, "open")
    .mockImplementation(() => null);

  render(<BlogSocialShareButtons url="https://example.com" />);

  const twitterShareButton = screen.getByTestId("twitter-button");

  fireEvent.click(twitterShareButton);

  expect(windowOpenSpy).toHaveBeenCalledWith(
    "https://twitter.com/share?url=https%3A%2F%2Fexample.com&via=datyayu",
    expect.anything(),
    expect.anything()
  );
});

test("facebook button work", () => {
  const windowOpenSpy = jest
    .spyOn(window, "open")
    .mockImplementation(() => null);

  render(<BlogSocialShareButtons url="https://example.com" />);

  const facebookShareButton = screen.getByTestId("facebook-button");

  fireEvent.click(facebookShareButton);

  expect(windowOpenSpy).toHaveBeenCalledWith(
    "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com",
    expect.anything(),
    expect.anything()
  );
});

test("linkedin button work", () => {
  const windowOpenSpy = jest
    .spyOn(window, "open")
    .mockImplementation(() => null);

  render(<BlogSocialShareButtons url="https://example.com" />);

  const linkedinShareButton = screen.getByTestId("linkedin-button");

  fireEvent.click(linkedinShareButton);

  expect(windowOpenSpy).toHaveBeenCalledWith(
    "https://linkedin.com/shareArticle?url=https%3A%2F%2Fexample.com&mini=true",
    expect.anything(),
    expect.anything()
  );
});

test("reddit button work", () => {
  const windowOpenSpy = jest
    .spyOn(window, "open")
    .mockImplementation(() => null);

  render(<BlogSocialShareButtons url="https://example.com" />);

  const redditShareButton = screen.getByTestId("reddit-button");

  fireEvent.click(redditShareButton);

  expect(windowOpenSpy).toHaveBeenCalledWith(
    "https://www.reddit.com/submit?url=https%3A%2F%2Fexample.com",
    expect.anything(),
    expect.anything()
  );
});
