import { render, screen } from "@testing-library/react";

import { SettingsPrimaryMenu } from "./settings-primary-menu";

test("renders SettingsPrimaryMenu", () => {
  render(<SettingsPrimaryMenu />);
  expect(screen.getByTestId("settings-menu-level")).toBeInTheDocument();
});

test("renders 3 SettingsMenuItem", () => {
  render(<SettingsPrimaryMenu />);
  const items = screen.getAllByTestId("settings-menu-item");

  expect(items).toHaveLength(3);
});
