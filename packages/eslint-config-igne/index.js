const rulesGeneric = require("./rules/generic");
const rulesReact = require("./rules/react");
const rulesImportSort = require("./rules/importSort");
const rulesImport = require("./rules/import");

module.exports = {
  env: {
    browser: true,
    es2020: true, // Can be different per project
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "simple-import-sort", "import", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "package.json", "*-lock.json"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },

  overrides: [
    { files: ["**/*.js?(x)"] },
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],

  rules: {
    ...rulesGeneric,
    ...rulesReact,
    ...rulesImportSort,
    ...rulesImport,
  },
};
