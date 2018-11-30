module.exports = {
  verbose: true,
  snapshotSerializers: ['@emotion/snapshot-serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  setupFiles: ['jest-plugin-context/setup'],
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy'
  }
};
