// param.spec.js

import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

test.describe('Parameterized Test for qase.io', () => {
  const testData = [
    { urlPath: '/example', expectedTitle: 'Example Domain' },  // Update as needed for real paths on qase.io
    { urlPath: '/login', expectedTitle: 'Login page' },
    { urlPath: '/not-found', expectedTitle: '404 - Page not found' },
  ];

  testData.forEach(({ urlPath, expectedTitle }) => {
    test(`Verify if "www.example.com${urlPath}" has the correct title`, async ({ page }) => {
      qase.id(1);  // Replace 1 with an actual valid case ID from your Qase project.
      qase.title("Verify if the Website has a correct title");
      qase.fields({
        'severity': 'blocker',
        'priority': 'medium',
        'layer': 'e2e',
        'description': 'Add the test description, with **rich text support**',
        'preconditions': 'Client is connected to the internet',
      });
      qase.parameters({
        'URL Path': urlPath,
        'Expected Title': expectedTitle
      });

      await test.step(`Go to https://example.com${urlPath}`, async () => {
        await page.goto(`https://example.com${urlPath}`);
      });

      await test.step(`Check if the page's title is ${expectedTitle}`, async () => {
        const title = await page.title();
        expect(title).toBe(expectedTitle);
      });
    });
  });
});
