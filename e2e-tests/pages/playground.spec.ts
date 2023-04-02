import { expect, test } from "@playwright/test";

test("should render the items", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const items = await page.getByTestId("experiment-item").all();

  expect(items.length).toBeGreaterThan(0);
});

test("should filter the items", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const itemsBeforeFiltering = await page.getByTestId("experiment-item").all();

  const buttonsContainer = await page.getByTestId("playground-filter-list");
  const reactButton = await buttonsContainer.getByText("React");
  await reactButton.click();
  const itemsAfterFiltering = await page.getByTestId("experiment-item").all();

  expect(itemsBeforeFiltering.length).toBeGreaterThan(
    itemsAfterFiltering.length
  );
});

test("should restore the items after removing the filter", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const itemsBeforeFiltering = await page.getByTestId("experiment-item").all();

  const buttonsContainer = await page.getByTestId("playground-filter-list");
  const reactButton = await buttonsContainer.getByText("React");
  await reactButton.click();

  const allButton = await buttonsContainer.getByText("All");
  await allButton.click();

  const itemsAfterRestoring = await page.getByTestId("experiment-item").all();

  expect(itemsBeforeFiltering.length).toEqual(itemsAfterRestoring.length);
});

test("should sort the items by name", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");

  const buttonsContainer = await page.getByTestId("playground-sorting-options");
  const nameButton = await buttonsContainer.getByText("Name");
  await nameButton.click();

  const items = await page.getByTestId("experiment-item").all();
  const itemLabels = await Promise.all(items.map((item) => item.textContent()));
  const sortedItemLabels = [...itemLabels].sort((a, b) => {
    return a?.localeCompare(b ?? "") ?? 0;
  });

  expect(itemLabels).toEqual(sortedItemLabels);
});

test("should open the modal preview", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const item = await page.getByTestId("experiment-item").first();
  await item.click();

  await page.waitForSelector("[data-testid=playground-frame__iframe]");
  const modal = await page.getByTestId("playground-frame__iframe");
  const modalTitle = await page.getByTestId("playground-frame__title");
  const modalLink = await page.getByTestId("playground-frame__link");

  expect(modal).toBeTruthy();
  expect(modalTitle).toBeTruthy();
  expect(modalLink).toBeTruthy();
});

test("should close the modal preview", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const item = await page.getByTestId("experiment-item").first();
  await item.click();

  await page.waitForSelector("[data-testid=playground-frame]");
  const overlayContainer = await page.getByTestId("playground-frame");
  await overlayContainer.click({ position: { x: 0, y: 0 } });

  await page.waitForSelector("[data-testid=playground-frame__iframe]", {
    state: "detached",
  });
  const modal = await page.$("[data-test=playground-frame__iframe]");

  expect(modal).toBeFalsy();
});
