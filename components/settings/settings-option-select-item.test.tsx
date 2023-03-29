import { fireEvent, render, screen } from "@testing-library/react";

import { SettingsOptionSelectItem } from "./settings-option-select-item";

test("renders SettingsOptionSelectItem", () => {
  render(
    <SettingsOptionSelectItem
      label="test"
      isSelected={false}
      onClick={() => {}}
    />
  );
  const settingsOptionSelectItem = screen.getByTestId(
    "settings-option-select-item"
  );
  expect(settingsOptionSelectItem).toBeInTheDocument();
});

test("renders SettingsOptionSelectItem with isSelected", () => {
  render(
    <SettingsOptionSelectItem
      label="test"
      isSelected={true}
      onClick={() => {}}
    />
  );
  const settingsOptionSelectItem = screen.getByTestId(
    "settings-option-select-item"
  );
  expect(settingsOptionSelectItem).toBeInTheDocument();
});

test("renders SettingsOptionSelectItem with label", () => {
  render(
    <SettingsOptionSelectItem
      label="test"
      isSelected={false}
      onClick={() => {}}
    />
  );
  const settingsOptionSelectItem = screen.getByText("test");
  expect(settingsOptionSelectItem).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(
    <SettingsOptionSelectItem
      label="test"
      isSelected={false}
      onClick={onClick}
    />
  );
  const settingsOptionSelectItem = screen.getByTestId(
    "settings-option-select-item"
  );

  fireEvent.click(settingsOptionSelectItem);

  expect(onClick).toHaveBeenCalled();
});
