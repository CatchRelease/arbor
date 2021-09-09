module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  verbose: true,
  snapshotSerializers: ['@emotion/jest/enzyme-serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  setupFiles: ['jest-plugin-context/setup'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy'
  }
};
