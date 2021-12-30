import { test, expect, Page } from "@playwright/test";

const HOST = "http://localhost:4040";

test("Should handle non-existent route", async ({ page }) => {
  await page.goto(`${HOST}/non-existent`);
  const title = page.locator("data-testid=PageHeader_Title");
  await expect(title).toHaveText("Not found");
});

const landOnMainPage = async (page: Page) => {
  await page.goto(`${HOST}`);
};

test("Should open repositories by default", async ({ page }) => {
  await landOnMainPage(page);
  const title = page.locator("data-testid=PageHeader_Title");

  await expect(title).toHaveText("Trending");

  const repoNavItem = page.locator("data-testid=ButtonGroupItem >> nth=0");
  await expect(repoNavItem).toHaveText("Repositories");
  await expect(repoNavItem).toHaveAttribute("data-active", "true");

  const devsNavItem = page.locator("data-testid=ButtonGroupItem >> nth=1");

  await expect(devsNavItem).toHaveText("Developers");
  await expect(devsNavItem).toHaveAttribute("data-active", "false");

  const repositoryItem = page.locator("data-testid=RepositoryCard >> nth=0");
  await expect(repositoryItem).toBeVisible();
});

test("Should navigate to developers", async ({ page }) => {
  await landOnMainPage(page);
  const devsNavItem = page.locator("data-testid=ButtonGroupItem >> nth=1");
  const repoNavItem = page.locator("data-testid=ButtonGroupItem >> nth=0");

  await expect(devsNavItem).toHaveAttribute("data-active", "false");

  await devsNavItem.click();

  await expect(page).toHaveURL(`${HOST}/developers`);
  await expect(devsNavItem).toHaveAttribute("data-active", "true");
  await expect(repoNavItem).toHaveAttribute("data-active", "false");

  const devItem = page.locator("data-testid=DeveloperCard >> nth=0");
  await expect(devItem).toBeVisible();
});
