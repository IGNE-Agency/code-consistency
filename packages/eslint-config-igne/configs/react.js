import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export const configReact = [
  {
    name: "igne-agency/react",
    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: { react: { version: "detect" } },

    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
    },
  },
];
