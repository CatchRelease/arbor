module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'stories/**',
          'tests/**',
          'jest.setup.js'
        ]
      },
    ]
  },
  overrides: [
    {
      files: ['tests/**/*.test.js'],
      globals: {
        describe: true,
        test: true,
        expect: true,
        it: true
      }
    }
  ]
};
