module.exports = {
  verbose: true,
  snapshotSerializers: ['@emotion/snapshot-serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFiles: ['jest-plugin-context/setup'],
  moduleNameMapper: {
    '\\.css': 'identity-obj-proxy'
  }
};
