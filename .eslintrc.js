module.exports = {
  env: {
    jest: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['jest'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'jest.setup.js',
          'src/**/__tests__/**',
          'stories/**',
          'utils/**'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      globals: {
        document: true
      }
    },
    {
      files: ['src/**/__tests__/**/*.test.js'],
      globals: {
        context: true,
        describe: true,
        expect: true,
        it: true,
        jest: true,
        test: true,
        window: true
      }
    }
  ]
};
