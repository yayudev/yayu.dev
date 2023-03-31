import { render, screen } from "@testing-library/react";

import { SettingsMenu } from "./settings-menu";

test("renders the settings menu", () => {
  render(<SettingsMenu />);

  const settingsMenu = screen.getByTestId("settings-menu");

  expect(settingsMenu).toBeInTheDocument();
});

test("renders the settings primary menu", () => {
  render(<SettingsMenu />);

  const settingsPrimaryMenu = screen.getByTestId("settings-menu-level");

  expect(settingsPrimaryMenu).toBeInTheDocument();
});
