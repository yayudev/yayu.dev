import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should change home menu's width", async ({ page }) => {
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

test("should change home menu's width back", async ({ page }) => {
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
