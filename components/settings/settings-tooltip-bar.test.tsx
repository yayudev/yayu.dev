import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

import { SettingsTooltipBar } from "./settings-tooltip-bar";

test("renders the tooltip bar", () => {
  render(<SettingsTooltipBar textKey="test" />);
  const tooltipBarElement = screen.getByTestId("settings-tooltip-bar");
  expect(tooltipBarElement).toBeInTheDocument();
});

test("renders the back button", () => {
  render(<SettingsTooltipBar textKey="test" showBack={true} />);
  const backButtonElement = screen.getByTestId("back-button");
  expect(backButtonElement).toBeInTheDocument();
});

test("renders the confirm button", () => {
  render(<SettingsTooltipBar textKey="test" showConfirm={true} />);
  const confirmButtonElement = screen.getByTestId("confirm-button");
  expect(confirmButtonElement).toBeInTheDocument();
});

test("renders the arrows button", () => {
  render(<SettingsTooltipBar textKey="test" showArrows={true} />);
  const arrowButtonElement = screen.getByTestId("arrow-button");
  expect(arrowButtonElement).toBeInTheDocument();
});

test("calls the back function when the back button is clicked", () => {
  const onBack = jest.fn();
  render(<SettingsTooltipBar textKey="test" showBack={true} onBack={onBack} />);
  const backButtonElement = screen.getByTestId("back-button");
  fireEvent.click(backButtonElement);
  expect(onBack).toHaveBeenCalled();
});
