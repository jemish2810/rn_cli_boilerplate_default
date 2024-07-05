module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!${thirdPartyIgnorePatterns.join("|")})`,
    "jest-runner",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.maestro/", "@react-native"],
  setupFiles: ["<rootDir>/test/setup.ts"],
  transform:{
    '^.+\\.test.tsx?$': ['ts-jest', {
      tsconfig: '<rootDir>/test/test-tsconfig.json'
    }]
  }
};
