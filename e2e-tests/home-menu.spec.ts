import { expect, test } from "@playwright/test";

test("home menu changes width", async ({ page }) => {
  await page.goto("https://yayu.dev/");
  const menuContainer = await page.getByTestId("home-menu");

  // Change route
  await menuContainer.getByText("Blog").click();

  // Wait for animation
  await page.waitForTimeout(500);

  // Check width
  const elementWidth = await menuContainer
    .boundingBox()
    .then((box) => box?.width ?? 0);
  expect(elementWidth).toBeLessThan(500);
});

test("home menu changes width back", async ({ page }) => {
  await page.goto("https://yayu.dev/");
  const menuContainer = await page.getByTestId("home-menu");

  // Change route
  await menuContainer.getByText("Blog").click();

  // Return to home
  await menuContainer.getByAltText("logo").click();

  // Wait for animation
  await page.waitForTimeout(500);

  // Check width
  const elementWidth = await menuContainer
    .boundingBox()
    .then((box) => box?.width ?? 0);
  expect(elementWidth).toBeGreaterThan(500);
});
