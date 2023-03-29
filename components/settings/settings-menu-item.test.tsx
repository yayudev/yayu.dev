import { fireEvent, render, screen } from "@testing-library/react";

import { SettingsLanguageOptions } from "@/types/settings-menu";

import { mockMenuOptions } from "@/utils/mocks/menu";

import { SettingsMenuItem } from "./settings-menu-item";

jest.mock("jotai", () => {
  const originalModule = jest.requireActual("jotai");
  return {
    ...originalModule,
    useAtom: () => ["test", () => {}],
  };
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("renders SettingsMenuItem", () => {
  render(
    <SettingsMenuItem
      label="Settings"
      options={mockMenuOptions}
      onClick={() => {}}
    />
  );
  const settingsMenuItemElement = screen.getByTestId("settings-menu-item");
  expect(settingsMenuItemElement).toBeInTheDocument();
});

test("renders SettingsOptionSelect when active choice is provided", () => {
  render(
    <SettingsMenuItem
      label="Settings"
      options={mockMenuOptions}
      choiceId="test"
      onClick={() => {}}
    />
  );
  const settingsOptionSelectElement = screen.getByTestId(
    "settings-option-select"
  );
  expect(settingsOptionSelectElement).toBeInTheDocument();
});

test("renders the collect label", () => {
  render(
    <SettingsMenuItem
      label="Language"
      options={mockMenuOptions}
      onClick={() => {}}
    />
  );
  const settingsMenuItemElement = screen.getByTestId(
    "settings-menu-item__content"
  );
  expect(settingsMenuItemElement).toHaveTextContent("Language");
});

test("renders the label along with the selected option", () => {
  render(
    <SettingsMenuItem
      label="Language"
      value={SettingsLanguageOptions.ENGLISH}
      options={mockMenuOptions}
      onClick={() => {}}
    />
  );
  const settingsMenuItemElement = screen.getByTestId(
    "settings-menu-item__content"
  );
  expect(settingsMenuItemElement).toHaveTextContent("Language English");
});

test("calls the onClick function when clicked", () => {
  const onClick = jest.fn();
  render(
    <SettingsMenuItem
      label="Settings"
      options={mockMenuOptions}
      onClick={onClick}
    />
  );

  const settingsMenuItemElement = screen.getByTestId("settings-menu-item");
  fireEvent.click(settingsMenuItemElement);

  expect(onClick).toHaveBeenCalled();
});

test("onClick when enter key is pressed", () => {
  const onClick = jest.fn();
  render(
    <SettingsMenuItem
      label="Settings"
      options={mockMenuOptions}
      onClick={onClick}
    />
  );

  const settingsMenuItemElement = screen.getByTestId("settings-menu-item");
  fireEvent.keyDown(settingsMenuItemElement, { key: "Enter", code: "Enter" });

  expect(onClick).toHaveBeenCalled();
});

test("onClick when space key is pressed", () => {
  const onClick = jest.fn();
  render(
    <SettingsMenuItem
      label="Settings"
      options={mockMenuOptions}
      onClick={onClick}
    />
  );

  const settingsMenuItemElement = screen.getByTestId("settings-menu-item");
  fireEvent.keyDown(settingsMenuItemElement, { key: " ", code: "Space" });

  expect(onClick).toHaveBeenCalled();
});
