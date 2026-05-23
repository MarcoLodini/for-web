import { expect, test } from "@playwright/test";

test("shows a working login page", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle(/Stoat/);

  const login = page.locator("a:has-text('Log In with SSO')");
  await expect(login).toBeVisible();
  await expect(login).toHaveAttribute("href", "/api/auth/sso/login");
});
