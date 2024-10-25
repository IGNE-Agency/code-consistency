import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import { configGeneric } from "./configs/generic.js";
import { configImport } from "./configs/import.js";
import { configPrettier } from "./configs/prettier.js";
import { configReact } from "./configs/react.js";

/**
 * Use this config for most projects.
 * Tested with Vite JS and TS templates.
 */
export const eslintConfigDefault = [
  {
    name: "igne-agency/default-ignores",
    ignores: ["**/dist/**", "package.json", "*-lock.json"],
  },

  {
    name: "igne-agency/default-language-options",
    files: ["**/*.js?(x)", "**/*.ts?(x)"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2022, // Can be different per project
      },
    },
  },

  {
    name: "igne-agency/cjs-globals",
    files: ["**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    name: "eslint/recommended",
    ...eslint.configs.recommended,
  },

  ...configGeneric,
  ...configReact,
  ...configImport,
  // `configs` named export is too generic, instead of renaming: this way it is more in-line with the other configs
  // eslint-disable-next-line import/no-named-as-default-member
  ...tseslint.configs.recommended,
  ...configPrettier,
];

/**
 * Use this config for expo projects.
 * Tested with an expo project with JS files.
 */
export const eslintConfigExpo = [
  {
    name: "igne-agency/default-ignores",
    ignores: ["**/dist/**", "package.json", "*-lock.json", "ios/**", "android/**"],
  },

  {
    name: "igne-agency/expo",
    files: ["**/*.js?(x)", "**/*.ts?(x)"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2022, // Can be different per project
      },
    },
    ignores: ["**/dist/**", "package.json", "*-lock.json"],
  },

  // Re-use default config without the first two entries
  ...eslintConfigDefault.slice(2),
];
