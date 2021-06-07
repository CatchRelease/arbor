module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  snapshotSerializers: ['@emotion/snapshot-serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFiles: ['jest-plugin-context/setup'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy'
  }
};
