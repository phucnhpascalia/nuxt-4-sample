import { test, expect } from "@playwright/test";

test("test validate login form", async ({ page }) => {
  await page.goto("./login");
  await page.click("button");

  // Check errors
  await expect(page.getByText("Please input your username!")).toBeVisible();
  await expect(page.getByText("Please input your password!")).toBeVisible();
});

test("test validate login form with fill username", async ({ page }) => {
  await page.goto("./login");
  await page.fill("input#form_item_username", "emilys");
  await page.click("button");

  // Check errors
  await expect(page.getByText("Please input your password!")).toBeVisible();
});

test("test validate login form with fill username and password", async ({
  page,
}) => {
  await page.goto("./login");
  await page.fill("input#form_item_username", "emilys");
  await page.fill("input#form_item_password", "emilyspass");
  await page.click("button");
  await page.waitForURL("./");

  // Check homepage
  await expect(page.getByText("Tom Cook")).toBeVisible();
});
