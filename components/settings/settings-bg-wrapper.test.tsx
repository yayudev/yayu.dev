import { render, screen } from "@testing-library/react";

import { SettingsBGWrapper } from "./settings-bg-wrapper";

afterEach(() => {
  jest.clearAllMocks();
});

test("renders SettingsBGWrapper", () => {
  // eslint-disable-next-line i18next/no-literal-string
  render(<SettingsBGWrapper>test</SettingsBGWrapper>);
  expect(screen.getByText("test")).toBeInTheDocument();
});

test("renders SettingsBGWrapper with content", () => {
  // eslint-disable-next-line i18next/no-literal-string
  render(<SettingsBGWrapper>test</SettingsBGWrapper>);
  expect(
    screen.getByTestId("settings-bg-wrapper__content")
  ).toBeInTheDocument();
  expect(screen.getByTestId("settings-bg-wrapper__content")).toHaveTextContent(
    "test"
  );
});
