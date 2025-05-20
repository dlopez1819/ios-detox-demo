/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  //testMatch: ['<rootDir>/e2e/**/*.test.js'],
  testEnvironment: "./environment",
  testRunner: 'jest-circus/runner',
  preset: 'ts-jest',
  //runner: 'groups´',
  testTimeout: 120000,
  testRegex: '\\.e2e\\.ts$',
  setupFilesAfterEnv: ["./src/init.ts"],
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter', 
    ['jest-html-reporters',
      {publicPath: './report'}
  ]],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  verbose: true,
};
