const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 18000,
  requestTimeout: 10000,
  viewportHeight: 1200,
  viewportWidth: 600,
  scrollBehavior: "center",
  video: false,
  numTestsKeptInMemory: 50,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://automationpractice.com/index.php",
  },
});
