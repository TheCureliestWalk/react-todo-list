import { test, expect } from '@playwright/test';

test('has page title', async ({ page }) => {

  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toContainText('To-Do List')
});

test('add new task', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Fill input
  await page.fill('input[name="todoTitle"]', 'Tested by Playwright');
  await page.fill('textarea[name="todoDescription"]', 'This task is automatic added by Playwright');

  await page.getByRole('button', { name: '+ Add New Todo' }).click();
  
  await page.waitForTimeout(1000);

  await expect(page.getByText('Tested by Playwright')).toBeVisible();
});

test('should clear all tasks', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Clear All' }).click();

});

