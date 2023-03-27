import { act, render, screen } from "@testing-library/react";

import { useWindowSize } from "@/hooks/use-window-size";

function MockComponent() {
  const windowSize = useWindowSize();

  return (
    <div data-testid="test">
      {/* eslint-disable-next-line i18next/no-literal-string */}
      {windowSize.width} x {windowSize.height}
    </div>
  );
}

test("it should return the window size", () => {
  global.innerWidth = 100;
  global.innerHeight = 200;
  render(<MockComponent />);

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("100 x 200");
});

test("it should update the value when the window is resized", () => {
  global.innerWidth = 100;
  global.innerHeight = 200;
  render(<MockComponent />);

  global.innerWidth = 300;
  global.innerHeight = 400;
  act(() => {
    global.dispatchEvent(new Event("resize"));
  });

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("300 x 400");
});
