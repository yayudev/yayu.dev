import { render, screen } from "@testing-library/react";

import { showSettingsAtom } from "@/state/settings-menu";

import { TestProvider } from "@/utils/jotai";

import { Settings } from "./settings";

test("should render the settings when the show settings is true", () => {
  render(
    <TestProvider initialValues={[[showSettingsAtom, true]]}>
      <Settings />
    </TestProvider>
  );

  const settings = screen.getByTestId("settings");

  expect(settings).toBeInTheDocument();
});

test("shouldn't render the settings when the show settings is false", () => {
  render(
    <TestProvider initialValues={[[showSettingsAtom, false]]}>
      <Settings />
    </TestProvider>
  );

  const settings = screen.queryByTestId("settings");

  expect(settings).not.toBeInTheDocument();
});
