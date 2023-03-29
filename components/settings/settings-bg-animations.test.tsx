import { render, screen } from "@testing-library/react";

import { SettingsBGAnimations } from "./settings-bg-animations";

test("renders SettingsTitle", () => {
  render(<SettingsBGAnimations width={100} height={100} />);
  const title = screen.getByTestId("settings-background-animation");

  expect(title).toBeInTheDocument();
});
