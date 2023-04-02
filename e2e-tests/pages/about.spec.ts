import { expect, test } from "@playwright/test";

test("should display correct title", async ({ page }) => {
  await page.goto("https://yayu.dev/about");
  const contentTitle = await page.getByTestId("page-title").textContent();
  const pageTitle = await page.title();

  expect(pageTitle).toBe("yayu.dev | About me");
  expect(contentTitle).toBe("About me");
});

test("should display the about me content correctly", async ({ page }) => {
  await page.goto("https://yayu.dev/about");
  const content = await page.getByTestId("page-content").textContent();

  expect(content).toContain("Hi! I'm Arturo Coronel");
});
