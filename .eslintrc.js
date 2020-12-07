module.exports = {
  env: {
    jest: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  plugins: ['@emotion', 'jest'],
  rules: {
    '@emotion/pkg-renaming': 'error',
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
    ],
    'import/no-named-as-default': 0,
    'react/forbid-foreign-prop-types': 0,
    'react/jsx-props-no-spreading': 0
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      globals: {
        document: true
      }
    },
    {
      files: ['src/**/__tests__/**/*'],
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
