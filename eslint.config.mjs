import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "max-len": ["off"], // Disable the max-len rule
    },
  },
  pluginJs.configs.recommended,
];
