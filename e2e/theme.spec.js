import { test, expect } from "@playwright/test";

test("built stories switch colors and retain edited controls", async ({ page }) => {
  await page.goto("/?path=/story/material-ui--basic-controls");
  const frame = page.frameLocator("#storybook-preview-iframe");
  const primary = frame.getByRole("button", { name: "Primary", exact: true });
  await expect(primary).toHaveCSS("background-color", "rgb(205, 220, 57)");
  const checkbox = frame.getByRole("checkbox", { name: "primary checkbox", exact: true });
  await checkbox.uncheck();
  await frame.locator("#age-native-simple").selectOption("20");
  await page.getByText("Garden", { exact: true }).click();
  await page.getByText("RetroWave", { exact: true }).click();
  await expect(primary).toHaveCSS("background-color", "rgb(63, 81, 181)");
  await expect(checkbox).not.toBeChecked();
  await expect(frame.locator("#age-native-simple")).toHaveValue("20");
  await expect(frame.getByRole("button", { name: "Disabled", exact: true })).toBeDisabled();
});

test("welcome navigation and button actions still work", async ({ page }) => {
  await page.goto("/?path=/story/welcome--to-storybook");
  const frame = page.frameLocator("#storybook-preview-iframe");
  await frame.getByRole("button", { name: "Open button stories" }).click();
  await expect(frame.getByRole("button", { name: "Hello Button" })).toBeVisible();
  await frame.getByRole("button", { name: "Hello Button" }).click();
  await page.getByRole("tab", { name: /Actions/ }).click();
  await expect(page.getByText("clicked", { exact: true }).first()).toBeVisible();
});
