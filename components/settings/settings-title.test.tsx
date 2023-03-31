import { render, screen } from "@testing-library/react";

import { SettingsTitle } from "./settings-title";

test("renders SettingsTitle", () => {
  // eslint-disable-next-line i18next/no-literal-string
  render(<SettingsTitle>Test</SettingsTitle>);
  const title = screen.getByText("Test");

  expect(title).toBeInTheDocument();
});
