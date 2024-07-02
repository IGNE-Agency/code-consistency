module.exports = {
  // Allow console- and debugger statements in development with warning, but throw errors in production build
  // `console.warn` and `console.error` are always allowed
  "no-console":
    process.env.NODE_ENV === "production"
      ? ["error", { allow: ["warn", "error"] }]
      : ["warn", { allow: ["warn", "error"] }],
  "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
};
