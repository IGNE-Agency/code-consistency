// In this monorepo we use our own eslint config 🤩

import { eslintConfigDefault } from "@igne-agency/eslint-config-igne";
import globals from "globals";

// The code-consistency repo is not a react project
const configWithoutReact = eslintConfigDefault.filter((config) => !config.name.includes("react"));

const config = [
  { ignores: ["test/**"] },
  ...configWithoutReact,
  {
    // This is needed for some process.env thingies in configs
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default config;
