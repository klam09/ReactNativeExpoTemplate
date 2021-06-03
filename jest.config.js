module.exports = {
  verbose: false,
  automock: false,
  bail: false,
  clearMocks: false,
  /** coverage */
  collectCoverage: false,
  // collectCoverageFrom: ["src/**/*.{js,jsx}", "!**/*index.js", "!src/serviceWorker.js", "!src/polyfill.js"],
  // coveragePathIgnorePatterns: ["/node_modules/"],
  /** alias */
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  /** test */
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  /** transform */
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(css|scss)$': '<rootDir>/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  // transformIgnorePatterns: ["/node_modules/"],
  /** watch */
  watchPathIgnorePatterns: ['/node_modules/'],
};
