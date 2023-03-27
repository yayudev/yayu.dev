import { act, render, screen } from "@testing-library/react";

import { MAX_WIDTH_TABLET } from "@/constants/media-queries";

import { useMobileLayout } from "@/hooks/use-mobile-layout";

function MockComponent() {
  const isMobile = useMobileLayout();

  return <div data-testid="test">{isMobile ? "Mobile" : "Desktop"}</div>;
}

test("it should return true if the window width is less than 768", () => {
  global.innerWidth = MAX_WIDTH_TABLET - 1;
  render(<MockComponent />);

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("Mobile");
});

test("it should return false if the window width is greater than 768", () => {
  global.innerWidth = MAX_WIDTH_TABLET + 1;
  render(<MockComponent />);

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("Desktop");
});

test("it should update the value when the window is resized", () => {
  global.innerWidth = MAX_WIDTH_TABLET + 1;
  render(<MockComponent />);

  global.innerWidth = MAX_WIDTH_TABLET - 1;
  act(() => {
    global.dispatchEvent(new Event("resize"));
  });

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("Mobile");
});
