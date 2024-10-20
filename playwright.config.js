// playwright.config.js

const config = {
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [
    ['list'],
    [
      'playwright-qase-reporter',
      {
        mode: 'testops',
        debug: false,
        testops: {
          api: {
            token: 'e5a60596d79356f758e6b3fd200816880d62ce2b19e1a23d011050c33c05454e',
          },
          project: 'EE',      // Replace <DEMO> with your project code
          uploadAttachments: true,
          run: {
            complete: true,
          },
        },
      },
    ],
  ],
};

module.exports = config;
