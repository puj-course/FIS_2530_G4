module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text-summary"],
  testMatch: [
    "<rootDir>/backend/**/*.(test|spec).js",
    "<rootDir>/frontend/**/*.(test|spec).js"
  ],
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/", "/build/"]
};
