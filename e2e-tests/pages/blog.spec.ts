import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
});

test("should display correct title", async ({ page }) => {
  await page.waitForSelector("[data-testid=page-title]");
  const contentTitle = await page.getByTestId("page-title").textContent();
  const pageTitle = await page.title();

  expect(pageTitle).toEqual("yayu.dev | Blog");
  expect(contentTitle).toEqual("Blog");
});

test("should show loading state", async ({ page }) => {
  await page.goto("https://yayu.dev");

  const menuLink = await page.getByText("Blog");
  await menuLink.click();

  const loader = await page.getByTestId("loader");

  await expect(loader).toBeVisible();
});

test("should display 10 items", async ({ page }) => {
  await page.waitForSelector("[data-testid=blog-post-item]");
  const items = await page.getByTestId("blog-post-item").all();

  expect(items.length).toEqual(10);
});
