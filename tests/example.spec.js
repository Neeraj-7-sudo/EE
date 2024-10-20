// example.spec.js

const { test, expect } = require('@playwright/test');

test('Test Qase - Playwright Integration', async ({ page }) => {
  await page.goto('https://app.qase.io/');
  expect(await page.title()).toBe('Qase | Test management software for quality assurance');
});
