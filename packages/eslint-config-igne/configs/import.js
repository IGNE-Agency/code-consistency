import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const typeScriptExtensions = [".ts", ".tsx"];
const allExtensions = [...typeScriptExtensions, ".js", ".jsx", ".mjs", ".cjs"];

// importPlugin for correctness and simpleImportSort for.. sorting.
export const configImport = [
  importPlugin.flatConfigs.recommended,

  {
    name: "igne-agency/import",
    settings: {
      "import/extensions": allExtensions,
      "import/parsers": {
        "@typescript-eslint/parser": typeScriptExtensions,
      },
      "import/resolver": {
        node: {
          extensions: allExtensions,
        },
        typescript: {
          alwaysTryTypes: true,
          project: ["tsconfig.json", "tsconfig.*.json"],
        },
      },
    },
    rules: {
      // TypeScript compilation already ensures that named imports exist in the referenced module
      "import/named": "off",

      "import/no-anonymous-default-export": "warn",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
    },
  },

  {
    name: "igne-agency/import-sorting",
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
