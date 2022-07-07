import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://localhost:3000',
    chromeWebSecurity:false,
    viewportWidth:500,
    viewportHeight:800,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
