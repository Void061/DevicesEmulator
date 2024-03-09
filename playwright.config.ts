import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'mobileSafari',
      use: { ...devices['iPhone 14 Pro Max'], defaultBrowserType:'webkit', browserName: 'webkit', channel: 'webkit', viewport: {width: 500, height: 740 }},
    },
    {
      name: 'mobileAndroid',
      use: { ...devices['Galaxy S9+'], defaultBrowserType:'chromium', browserName:'chromium', channel: 'chrome', viewport: { width: 500, height: 740 }},
    },
    {
      name: 'tabletAndroid',
      use: { ...devices['Nexus 10 landscape'], defaultBrowserType:'chromium', browserName:'chromium', channel: 'chrome', viewport: { width: 500, height: 740 }},
    },
    {
      name: 'ipadSafari',
      use: { ...devices['Ipad Pro 11'], defaultBrowserType:'webkit', browserName: 'webkit', channel: 'webkit', viewport: { width: 500, height: 740 }},
    },
  ],
});
