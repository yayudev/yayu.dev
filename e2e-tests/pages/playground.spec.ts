import { expect, test } from "@playwright/test";

import { ExperimentData } from "@/types/experiments";

test("should render the items", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const items = await page.$$("[data-testid=experiment-item]");

  expect(items.length).toBeGreaterThan(0);
});

test("should filter the items", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const itemsBeforeFiltering = await page.$$("[data-testid=experiment-item]");

  const buttonsContainer = await page.getByTestId("playground-filter-list");
  const reactButton = await buttonsContainer.getByText("React");
  await reactButton.click();
  const itemsAfterFiltering = await page.$$("[data-testid=experiment-item]");

  expect(itemsBeforeFiltering.length).toBeGreaterThan(
    itemsAfterFiltering.length
  );
});

test("should restore the items after removing the filter", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");
  const itemsBeforeFiltering = await page.$$("[data-testid=experiment-item]");

  const buttonsContainer = await page.getByTestId("playground-filter-list");
  const reactButton = await buttonsContainer.getByText("React");
  await reactButton.click();
  const allButton = await buttonsContainer.getByText("All");
  await allButton.click();
  const itemsAfterRestoring = await page.$$("[data-testid=experiment-item]");

  expect(itemsBeforeFiltering.length).toEqual(itemsAfterRestoring.length);
});

test("should sort the items by name", async ({ page }) => {
  await page.goto("https://yayu.dev/playground");

  const buttonsContainer = await page.getByTestId("playground-sorting-options");
  const nameButton = await buttonsContainer.getByText("Name");
  await nameButton.click();

  const items = await page.$$("[data-testid=experiment-item]");
  const itemLabels = await Promise.all(items.map((item) => item.textContent()));
  const sortedItemLabels = [...itemLabels].sort((a, b) => {
    return a?.localeCompare(b ?? "") ?? 0;
  });

  expect(itemLabels).toEqual(sortedItemLabels);
});
