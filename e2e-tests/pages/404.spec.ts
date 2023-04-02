import { expect, test } from "@playwright/test";

test("404", async ({ page }) => {
  await page.goto("https://yayu.dev/page-that-does-not-exist");
  const message = await page.getByText("404 - Page Not Found");

  await expect(message).toBeVisible();
});
