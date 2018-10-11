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
          'tests/**'
        ]
      },
    ]
  },
  overrides: [
    {
      files: ['tests/**/*.test.js'],
      globals: {
        test: true,
        expect: true
      }
    }
  ]
};
