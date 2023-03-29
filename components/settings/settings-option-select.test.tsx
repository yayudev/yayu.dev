import { fireEvent, render, screen } from "@testing-library/react";

import { SettingsLanguageOptions } from "@/types/settings-menu";

import { mockMenuOptions } from "@/utils/mocks/menu";

import { SettingsOptionSelect } from "./settings-option-select";

test("renders settings option select", () => {
  render(
    <SettingsOptionSelect
      options={mockMenuOptions}
      selectedValue={SettingsLanguageOptions.ENGLISH}
      onSelect={() => {}}
    />
  );
  const settingsOptionSelectElement = screen.getByTestId(
    "settings-option-select"
  );
  expect(settingsOptionSelectElement).toBeInTheDocument();
});

test("renders settings option select items", () => {
  render(
    <SettingsOptionSelect
      options={mockMenuOptions}
      selectedValue={SettingsLanguageOptions.ENGLISH}
      onSelect={() => {}}
    />
  );
  const settingsOptionSelectItemElements = screen.getAllByTestId(
    "settings-option-select-item"
  );

  expect(settingsOptionSelectItemElements).toHaveLength(2);
  expect(settingsOptionSelectItemElements[0]).toHaveTextContent("English");
  expect(settingsOptionSelectItemElements[1]).toHaveTextContent("Spanish");
});

test("calls onSelect when an item is clicked", () => {
  const onSelect = jest.fn();
  render(
    <SettingsOptionSelect
      options={mockMenuOptions}
      selectedValue={SettingsLanguageOptions.ENGLISH}
      onSelect={onSelect}
    />
  );

  const settingsOptionSelectItemElements = screen.getAllByTestId(
    "settings-option-select-item"
  );

  fireEvent.click(settingsOptionSelectItemElements[1]);

  expect(onSelect).toHaveBeenCalledTimes(1);
  expect(onSelect).toHaveBeenCalledWith(SettingsLanguageOptions.SPANISH);
});
