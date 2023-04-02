import { expect, test } from "@playwright/test";

test("should navigate to blog's second page", async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
  const nextPageLink = await page.getByTestId("blog-pagination__next-link");
  await nextPageLink.click();
  await page.waitForURL("https://yayu.dev/blog/page/2");

  expect(page.url()).toBe("https://yayu.dev/blog/page/2");
});

test("should navigate to blog's third page", async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
  const nextPageLink = await page.getByTestId("blog-pagination__next-link");
  await nextPageLink.click();
  await nextPageLink.click();
  await page.waitForURL("https://yayu.dev/blog/page/3");

  expect(page.url()).toBe("https://yayu.dev/blog/page/3");
});

test("should navigate to blog's first page", async ({ page }) => {
  await page.goto("https://yayu.dev/blog/page/2");
  const previousPageLink = await page.getByTestId("blog-pagination__prev-link");
  await previousPageLink.click();
  await page.waitForURL("https://yayu.dev/blog/page/1");

  expect(page.url()).toBe("https://yayu.dev/blog/page/1");
});

test("should render the blog posts on page 2+", async ({ page }) => {
  await page.goto("https://yayu.dev/blog/page/2");
  await page.waitForSelector("[data-testid=blog-post-item]");
  const posts = await page.getByTestId("blog-post-item").all();

  expect(posts.length).toEqual(10);
});

test("should navigate to the blog post page", async ({ page }) => {
  await page.goto("https://yayu.dev/blog");
  const post = await page.getByTestId("blog-post-item").first();
  await post.click();
  await page.waitForURL(/https:\/\/yayu.dev\/blog\/.+/);
  await page.waitForSelector("[data-testid=page-title]");
  const text = await page.getByTestId("page-content").textContent();

  expect(text).toBeTruthy();
});
