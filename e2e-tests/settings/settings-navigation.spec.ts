import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");

  // Open the menu
  const settingsButton = await page
    .getByTestId("home-menu-item__click-link")
    .getByText("Settings");
  await settingsButton.click();
});

test("should show the settings menu if the settings link is clicked", async ({
  page,
}) => {
  await page.waitForSelector("[data-testid=settings]");
  const title = await page.$("h1");
  const text = await title?.innerText();

  await expect(text).toEqual("Settings");
});

test("should show the content settings menu if the content settings link is clicked", async ({
  page,
}) => {
  // Click on the content settings button
  const contentSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Content");
  await contentSettingsButton.click();

  // Make sure the content settings menu is visible
  await page.waitForSelector("[data-testid=settings-menu-level]:nth-child(2)");
  const languageOption = await page.getByText("Language").first();
  const animationsOption = await page.getByText("Animations").first();

  await expect(languageOption).toBeVisible();
  await expect(animationsOption).toBeVisible();
});

test("should show the blog settings menu if the blog settings link is clicked", async ({
  page,
}) => {
  // Click on the blog settings button
  const blogSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Blog");
  await blogSettingsButton.click();

  // Make sure the blog settings menu is visible
  await page.waitForSelector("[data-testid=settings-menu-level]:nth-child(2)");
  const commentsOption = await page.getByText("Comments").first();
  const sharingOption = await page.getByText("Sharing").first();

  await expect(commentsOption).toBeVisible();
  await expect(sharingOption).toBeVisible();
});

test("should show the other settings menu if the other settings link is clicked", async ({
  page,
}) => {
  // Click on the other settings button
  const otherSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Other");
  await otherSettingsButton.click();

  // Make sure the other settings menu is visible
  await page.waitForSelector("[data-testid=settings-menu-level]:nth-child(2)");
  const sharingOption = await page.getByText("Tracking").first();

  await expect(sharingOption).toBeVisible();
});

test("should show options for the blog language", async ({ page }) => {
  // Click on the content settings button
  const contentSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Content");
  await contentSettingsButton.click();

  // Click on the language settings button
  const languageSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Language");
  await languageSettingsButton.click();

  // Make sure the language options are visible
  await page.waitForSelector("[data-testid=settings-option-select-item]");
  const englishOption = await page.getByText("English").first();
  const spanishOption = await page.getByText("Spanish").first();

  await expect(englishOption).toBeVisible();
  await expect(spanishOption).toBeVisible();
});

test("should change the option for animations", async ({ page }) => {
  // Click on the content settings button
  const contentSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Content");
  await contentSettingsButton.click();

  // Click on the animations settings button
  const animationsButtonBeforeChange = await page
    .getByTestId("settings-menu-level")
    .getByText("Animations On");
  await animationsButtonBeforeChange.click();

  // Make sure the animations option is visible
  await page.waitForSelector("[data-testid=settings-option-select-item]");
  const onOption = await page.getByText("On").first();
  const offOption = await page.getByText("Off").first();

  await expect(onOption).toBeVisible();
  await expect(offOption).toBeVisible();

  // Click on the off option
  await offOption.click();

  // Make sure the off option is selected
  const animationsButtonAfterChange = await page.getByText("Animations Off");
  await expect(animationsButtonAfterChange).toBeVisible();
});

test("should preserve the option change after a page refresh", async ({
  page,
}) => {
  // Click on the content settings button
  const blogSettingsButton = await page
    .getByTestId("settings-menu-level")
    .getByText("Blog");
  await blogSettingsButton.click();

  // Click on the animations settings button
  const commentsButtonBeforeChange = await page
    .getByTestId("settings-menu-level")
    .getByText("Comments On");
  await commentsButtonBeforeChange.click();

  // Make sure the animations option is visible
  await page.waitForSelector("[data-testid=settings-option-select-item]");
  const onOption = await page.getByText("On").first();
  const offOption = await page.getByText("Off").first();

  await expect(onOption).toBeVisible();
  await expect(offOption).toBeVisible();

  // Click on the off option
  await offOption.click();

  // Make sure the off option is selected
  const commentsButtonAfterChange = await page.getByText("Comments Off");
  await expect(commentsButtonAfterChange).toBeVisible();

  // Refresh the page
  await page.reload();
  const settingsButton = await page
    .getByTestId("home-menu-item__click-link")
    .getByText("Settings");
  await settingsButton.click();

  // Click on the content settings button
  const blogSettingsButtonAfterRefresh = await page
    .getByTestId("settings-menu-level")
    .getByText("Blog");
  await blogSettingsButtonAfterRefresh.click();

  // Make sure value is preserved
  const commentsButtonAfterRefresh = await page.getByText("Comments Off");
  await expect(commentsButtonAfterRefresh).toBeVisible();
});
