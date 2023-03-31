import { render, screen } from "@testing-library/react";

import { SettingsBorder } from "./settings-border";

test("renders SettingsBorder", () => {
  render(<SettingsBorder />);
  const settingsBorder = screen.getByTestId("settings-border");
  expect(settingsBorder).toBeInTheDocument();
});
