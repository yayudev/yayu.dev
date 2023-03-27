import { act, render, screen } from "@testing-library/react";
import { useState } from "react";

import { useKeyboard } from "@/hooks/use-keyboard";

function MockComponent() {
  const [key, setKey] = useState("");

  useKeyboard(
    ["Escape"],
    (event) => {
      setKey(event.key);
    },
    [key]
  );

  return <div data-testid="test">{key}</div>;
}

test("it should call the callback when the key is pressed", () => {
  render(<MockComponent />);

  act(() => {
    global.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  });

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("Escape");
});

test("it should not call the callback when a key that is not tracked is pressed", () => {
  render(<MockComponent />);

  act(() => {
    global.dispatchEvent(new KeyboardEvent("keydown", { key: "B" }));
  });

  const result = screen.getByTestId("test").textContent;

  expect(result).toBe("");
});
