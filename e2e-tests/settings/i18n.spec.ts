import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");

  // Open the menu
  const settingsButton = await page
    .getByTestId("home-menu-item__click-link")
    .getByText("Settings");
  await settingsButton.first().click();
  await page.waitForSelector("[data-testid=settings]");
});

test("should change language to spanish", async ({ page }) => {
  await page.getByText("Content").first().click();
  await page.getByText("Language").first().click();
  await page.getByText("Spanish").first().click();

  const optionAfterChange = await page.getByText("Contenido");
  await expect(optionAfterChange).toBeVisible();
});

test("should change language to english", async ({ page }) => {
  await page.getByText("Content").first().click();
  await page.getByText("Language").first().click();
  await page.getByText("Spanish").first().click();

  const optionAfterChange = await page.getByText("Contenido");
  await expect(optionAfterChange).toBeVisible();

  await page.getByText("Contenido").first().click();
  await page.getByText("Idioma").first().click();
  await page.getByText("Ingles").first().click();

  const optionAfterChange2 = await page.getByText("Content");
  await expect(optionAfterChange2).toBeVisible();
});

test("should load the proper language on first load", async ({ page }) => {
  await page.goto("/es");

  const menuOption = await page.getByText("Experimentos").first();
  await expect(menuOption).toBeVisible();
});
