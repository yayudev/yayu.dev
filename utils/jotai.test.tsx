import { fireEvent, render, screen } from "@testing-library/react";
import { useAtom } from "jotai";

import { atomWithStorageAndSideEffects } from "@/utils/jotai";

beforeEach(() => {
  localStorage.clear();
});

test("atomWithStorageAndSideEffects should call the callback when the key is set to a new value", () => {
  const spy = jest.fn();
  const atom = atomWithStorageAndSideEffects("test", "", spy);

  function MockComponent() {
    const [value, setValue] = useAtom(atom);

    return (
      <div data-testid="test" onClick={() => setValue("new value")}>
        {value}
      </div>
    );
  }

  render(<MockComponent />);

  const textElement = screen.getByTestId("test");
  expect(textElement.textContent).toEqual("");

  fireEvent.click(textElement);

  expect(spy).toHaveBeenCalledWith("", "new value");
  expect(textElement.textContent).toEqual("new value");
});
