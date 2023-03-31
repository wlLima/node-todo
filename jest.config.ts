/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
 
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["./dist"]

};
