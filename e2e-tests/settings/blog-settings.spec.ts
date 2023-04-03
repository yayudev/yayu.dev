import { expect, test } from "@playwright/test";

test("should disable the sharing buttons", async ({ page }) => {
  await page.goto("/blog");
  // Navigate to the first post
  await page.waitForSelector("[data-testid=blog-post-item]");
  const firstPost = await page.getByTestId("blog-post-item").first();
  await firstPost.click();

  // Make sure the sharing buttons are visible
  await page.waitForSelector("[data-testid=facebook-button]");
  const facebookButton = await page.getByTestId("facebook-button");

  // Disable the sharing buttons
  const settingsButton = await page
    .getByTestId("home-menu-item__click-link")
    .getByText("Settings");
  await settingsButton.click();

  const blogSettingsButton = await page
    .getByTestId("settings-menu-item__content")
    .getByText("Blog");
  await blogSettingsButton.click();

  const sharingSettingButton = await page
    .getByTestId("settings-menu-item__content")
    .getByText(/Sharing(.*)/i);
  await sharingSettingButton.click();

  const offButton = await page
    .getByTestId("settings-option-select-item")
    .getByText("Off");
  await offButton.click();

  // Exit settings
  await page.keyboard.press("Escape");
  await page.keyboard.press("Escape");

  // Make sure the sharing buttons are hidden
  await page.waitForSelector("[data-testid=facebook-button]", {
    state: "detached",
  });
  await expect(facebookButton).toBeHidden();
});
