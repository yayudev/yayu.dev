import { act, render, screen } from "@testing-library/react";

import { useHover } from "./use-hover";

function MockComponent() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <div ref={hoverRef} data-testid="test">
      {isHovered ? "Hovered" : "Not hovered"}
    </div>
  );
}

test("should return false when not hovered", () => {
  render(<MockComponent />);

  const textElement = screen.getByTestId("test");

  expect(textElement.textContent).toEqual("Not hovered");
});

test("should return true when hovered", () => {
  render(<MockComponent />);

  const textElement = screen.getByTestId("test");

  act(() => {
    textElement.dispatchEvent(
      new MouseEvent("mouseover", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  expect(textElement.textContent).toEqual("Hovered");
});

test("should return false when un-hovered", () => {
  render(<MockComponent />);

  const textElement = screen.getByTestId("test");

  act(() => {
    textElement.dispatchEvent(
      new MouseEvent("mouseover", {
        bubbles: true,
        cancelable: true,
      })
    );

    screen.getByTestId("test").dispatchEvent(
      new MouseEvent("mouseout", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  expect(textElement.textContent).toEqual("Not hovered");
});

test("should return true when focused", () => {
  render(<MockComponent />);

  const textElement = screen.getByTestId("test");

  act(() => {
    textElement.dispatchEvent(
      new FocusEvent("focus", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  expect(textElement.textContent).toEqual("Hovered");
});

test("should return false when blurred", () => {
  render(<MockComponent />);

  const textElement = screen.getByTestId("test");

  act(() => {
    textElement.dispatchEvent(
      new FocusEvent("focus", {
        bubbles: true,
        cancelable: true,
      })
    );

    screen.getByTestId("test").dispatchEvent(
      new FocusEvent("blur", {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  expect(textElement.textContent).toEqual("Not hovered");
});
