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
            token: '<d8e59703dca5783d5a48653e3abd59d8da46a7c0c89b3d2b73a336066e1cdf87>',
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