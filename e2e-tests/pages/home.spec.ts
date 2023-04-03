import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should display the home page", async ({ page }) => {
  await expect(page).toHaveTitle("yayu.dev");
});

test("should display the menu", async ({ page }) => {
  const nav = await page.getByTestId("home-menu");

  await expect(nav).toContainText("Blog");
  await expect(nav).toContainText("Playground");
  await expect(nav).toContainText("Settings");
  await expect(nav).toContainText("About");
});
