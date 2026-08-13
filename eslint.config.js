"use strict";

const { config } = require("@ota-meshi/eslint-plugin");

module.exports = [
  {
    ignores: [".nyc_output/**", "coverage/**", "lib/**", "**/.*"],
  },
  ...config({
    json: true,
    node: true,
    packageJson: true,
    prettier: true,
  }),
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
    },
    rules: {
      "no-warning-comments": "warn",
    },
  },
];
