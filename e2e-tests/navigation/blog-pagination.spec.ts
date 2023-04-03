import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/blog");
});

test("should navigate to blog's second page", async ({ page }) => {
  const nextPageLink = await page.getByTestId("blog-pagination__next-link");
  await nextPageLink.click();
  await page.waitForURL("**/page/2");

  expect(page.url()).toContain("blog/page/2");
});

test("should navigate to blog's third page", async ({ page }) => {
  const nextPageLink = await page.getByTestId("blog-pagination__next-link");
  await nextPageLink.click();
  await page.waitForURL("**/blog/page/2");
  await nextPageLink.click();
  await page.waitForURL("**/blog/page/3");

  expect(page.url()).toContain("blog/page/3");
});

test("should navigate to blog's first page", async ({ page }) => {
  await page.goto("/blog/page/2");
  await page.waitForSelector("[data-testid=blog-pagination__prev-link]");
  const previousPageLink = await page.getByTestId("blog-pagination__prev-link");
  await previousPageLink.click();
  await page.waitForURL("**/blog/page/1");

  expect(page.url()).toContain("blog/page/1");
});

test("should render the blog posts on page 2+", async ({ page }) => {
  await page.goto("/blog/page/2");
  await page.waitForSelector("[data-testid=blog-post-item]");
  const posts = await page.getByTestId("blog-post-item").all();

  expect(posts.length).toEqual(10);
});

test("should navigate to the blog post page", async ({ page }) => {
  const post = await page.getByTestId("blog-post-item").first();
  await post.click();

  await page.waitForURL("**/blog/*");
  const loader = await page.getByTestId("loader");
  await loader.waitFor({ state: "detached" });

  await page.waitForSelector("[data-testid=page-content]");
  const text = await page.getByTestId("page-content").first().textContent();

  expect(text).toContain("Posted on");
});
