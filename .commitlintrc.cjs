module.exports = {
  extends: ["@commitlint/config-angular"],
  rules: {
    "scope-enum": [2, "always", ["repo", "eslint", "prettier"]],
  },
};
