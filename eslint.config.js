export default [
  {
    files: ["backend/**/*.js", "frontend/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true }   // <— permite JSX
      },
      globals: {
        browser: true,
        node: true,
        jest: true
      }
    },
    rules: {
      complexity: ["error", 10],
      "max-depth": ["warn", 3],
      "max-lines-per-function": ["warn", 60]
    },
    ignores: ["**/node_modules/**", "dist/**", "build/**"]
  }
];
