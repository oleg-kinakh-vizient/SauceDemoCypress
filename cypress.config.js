const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  requestTimeout: 240000,
  responseTimeout: 240000,


  e2e: {
    baseUrl:"https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
