// Disable rules that interfere with how prettier works.
// There is a plugin for this called `eslint-plugin-prettier`.
// However, that plugin disables mostly rules that are already deprecated by eslint.
// The following are the only ones that still apply:
export const configPrettier = [
  {
    name: "igne-agency/prettier",
    rules: {
      curly: "off",
      "no-unexpected-multiline": "off",
    },
  },
];
