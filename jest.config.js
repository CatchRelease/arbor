module.exports = {
  verbose: true,
  snapshotSerializers: ['@emotion/snapshot-serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy'
  }
};
