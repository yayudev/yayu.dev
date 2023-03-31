import { render, screen } from "@testing-library/react";

import { SettingsMenuLevel } from "./settings-menu-level";

test("renders SettingsMenuLevel", () => {
  render(<SettingsMenuLevel>1</SettingsMenuLevel>);
  const settingsMenuLevelElement = screen.getByTestId("settings-menu-level");

  expect(settingsMenuLevelElement).toBeInTheDocument();
});
