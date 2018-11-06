module.exports = {
  verbose: true,
  snapshotSerializers: ['jest-emotion/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy'
  }
};
