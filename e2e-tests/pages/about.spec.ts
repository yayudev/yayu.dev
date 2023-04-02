import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://yayu.dev/about");
});

test("should display correct title", async ({ page }) => {
  const contentTitle = await page.getByTestId("page-title").textContent();
  const pageTitle = await page.title();

  expect(pageTitle).toEqual("yayu.dev | About me");
  expect(contentTitle).toEqual("About me");
});

test("should display the about me content correctly", async ({ page }) => {
  const content = await page.getByTestId("page-content").textContent();

  expect(content).toContain("Hi! I'm Arturo Coronel");
});
