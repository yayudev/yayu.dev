import { expect, test } from "@playwright/test";

test("should display correct title", async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
  await page.waitForSelector("[data-testid=page-title]");
  const contentTitle = await page.getByTestId("page-title").textContent();
  const pageTitle = await page.title();

  expect(pageTitle).toBe("yayu.dev | Blog");
  expect(contentTitle).toBe("Blog");
});

test("should show loading state", async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
  const loader = await page.getByTestId("loader");

  expect(loader).toBeTruthy();
});

test("should display 10 items", async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
  await page.waitForSelector("[data-testid=blog-post-item]");
  const items = await page.$$("[data-testid=blog-post-item]");

  expect(items.length).toBe(10);
});
