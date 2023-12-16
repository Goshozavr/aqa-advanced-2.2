const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "Bb7x8g",
  e2e: {
    baseUrl: "http://localhost:4200/",
    retries: { openMode: 0, runMode: 2 },
    execTimeout: 90000,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    downloadsFolder: "cypress/downloads",
    viewportHeight: 660,
    viewportWidth: 1000,
    specPattern: "cypress/e2e/**/*.spec.{js,ts}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
