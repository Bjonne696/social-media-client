const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    emailForTesting: "BjoJaa36212@stud.noroff.no",
    passwordForTesting: "12345678"
  }
});
