import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.wikipedia.org/");
  await page.getByRole("link", { name: "Deutsch 2.982.000+ Artikel" }).click();
  await page.getByRole("link", { name: "Sport" }).click();
  await page.getByRole("link", { name: "American Football" }).click();
  await page.getByRole("searchbox", { name: "Wikipedia durchsuchen" }).click();
  await page
    .getByRole("searchbox", { name: "Wikipedia durchsuchen" })
    .fill("efdfdsfsd");
  await page.getByRole("button", { name: "Artikel" }).click();
  await page.locator("#searchText span").nth(1).click();
  await page.getByRole("button", { name: "Entfernen" }).click();
  await page.getByRole("button", { name: "Suchen", exact: true }).click();
  await page.getByText("Artikel verbessernNeuen").click();
  await page.getByRole("link", { name: "Spenden" }).click();
  await page
    .getByRole("listitem")
    .filter({ hasText: "Zu einer ausführlichen Ü" })
    .getByRole("link")
    .click();
});
