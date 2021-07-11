module.exports = {
  env: {
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@emotion', '@typescript-eslint', 'jest'],
  rules: {
    '@emotion/pkg-renaming': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'import/extensions': [2, 'never'],
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
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 'off'
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      globals: {
        document: true
      }
    },
    {
      files: ['src/**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
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
