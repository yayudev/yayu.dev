import { render, screen } from "@testing-library/react";

import { MenuCategory } from "@/types/settings-menu";

import { activeMenuAtom } from "@/state/settings-menu";

import { TestProvider } from "@/utils/jotai";

import { SettingsSubMenu } from "./settings-submenu";

test("should render the settings submenu", () => {
  render(<SettingsSubMenu />);
  const settingsSubmenu = screen.getByTestId("settings-menu-level");

  expect(settingsSubmenu).toBeInTheDocument();
});

test("should render the settings submenu with the content menu active", () => {
  render(
    <TestProvider initialValues={[[activeMenuAtom, MenuCategory.CONTENT]]}>
      <SettingsSubMenu />
    </TestProvider>
  );
  const languageLabel = screen.getByText("settings:labels.language");
  const animationsLabel = screen.getByText("settings:labels.animations");

  expect(languageLabel).toBeInTheDocument();
  expect(animationsLabel).toBeInTheDocument();
});

test("should render the settings submenu with the blog menu active", () => {
  render(
    <TestProvider initialValues={[[activeMenuAtom, MenuCategory.BLOG]]}>
      <SettingsSubMenu />
    </TestProvider>
  );
  const commentsLabel = screen.getByText("settings:labels.comments");
  const socialShareLabel = screen.getByText("settings:labels.social-share");

  expect(commentsLabel).toBeInTheDocument();
  expect(socialShareLabel).toBeInTheDocument();
});

test("should render the settings submenu with the other menu active", () => {
  render(
    <TestProvider initialValues={[[activeMenuAtom, MenuCategory.OTHER]]}>
      <SettingsSubMenu />
    </TestProvider>
  );
  const trackingLabel = screen.getByText("settings:labels.tracking");

  expect(trackingLabel).toBeInTheDocument();
});
