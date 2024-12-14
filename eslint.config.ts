import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["node_modules", ".next", "out", "public", "**/*.config.js", "**/*.config.mjs"]  
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.recommended,
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    }
  }
];
