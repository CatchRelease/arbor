const path = require('path');

const toPath = (relativePath) => path.join(process.cwd(), relativePath);

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  babel: (config) => {
    const getEntryIndexByName = (type, name) => {
      return config[type].findIndex((entry) => {
        const entryName = Array.isArray(entry) ? entry[0] : entry;
        return entryName.includes(name);
      });
    };

    const presetReactIndex = getEntryIndexByName(
      'presets',
      '@babel/preset-react'
    );

    // Contrary to storybook's documentation, it does not appear to be loading
    // our root .babelrc, so we customize the default config's react preset
    // importSource.
    // See also https://github.com/storybookjs/storybook/issues/13577
    config.presets[presetReactIndex][1].importSource = '@emotion/react'; // eslint-disable-line no-param-reassign

    return config;
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        }
      }
    };
  }
};
