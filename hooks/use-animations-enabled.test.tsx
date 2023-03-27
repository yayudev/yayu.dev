import { fireEvent, render, screen } from "@testing-library/react";
import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";

import { SettingsToggleOptions } from "@/types/settings-menu";

import { animationsAtom } from "@/state/application";

import { useAnimationsEnabled } from "@/hooks/use-animations-enabled";

function MockSwitchComponent() {
  const [animationsEnabled, setAnimationsEnabled] = useAtom(animationsAtom);
  const resetAnimationsAtom = useResetAtom(animationsAtom);

  return (
    <>
      <button
        data-testid="test-switch"
        onClick={() =>
          setAnimationsEnabled(
            animationsEnabled === SettingsToggleOptions.OFF
              ? SettingsToggleOptions.ON
              : SettingsToggleOptions.OFF
          )
        }
      >
        {animationsEnabled ? "Enabled" : "Disabled"}
      </button>
      <button
        data-testid="test-reset"
        onClick={() => {
          resetAnimationsAtom();
        }}
      />
    </>
  );
}

function MockComponent() {
  const animationsEnabled = useAnimationsEnabled();

  return (
    <div data-testid="test">{animationsEnabled ? "Enabled" : "Disabled"}</div>
  );
}

beforeEach(() => {});

test("should return false when animations are disabled", () => {
  render(
    <>
      <MockSwitchComponent />
      <MockComponent />
    </>
  );

  const textElement = screen.getByTestId("test");
  const switchElement = screen.getByTestId("test-switch");
  const resetStateButton = screen.getByTestId("test-reset");

  fireEvent.click(resetStateButton);
  fireEvent.click(switchElement);

  expect(textElement.textContent).toEqual("Disabled");
});

test("should return true when animations are enabled", () => {
  render(
    <>
      <MockSwitchComponent />
      <MockComponent />
    </>
  );

  const textElement = screen.getByTestId("test");
  const switchElement = screen.getByTestId("test-switch");
  const resetStateButton = screen.getByTestId("test-reset");

  fireEvent.click(resetStateButton);
  fireEvent.click(switchElement);
  fireEvent.click(switchElement);

  expect(textElement.textContent).toEqual("Enabled");
});
