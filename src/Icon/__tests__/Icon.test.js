import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import createWithTheme from '../../../tests/utils/createWithTheme';
import Icon from '../Icon';

describe('<Icon />', () => {
  it('renders an icon properly', () => {
    const tree = createWithTheme(<Icon name="my-icon" />);

    expect(tree).toMatchSnapshot();
  });

  it('applies a class based off the icon name using the theme prefix', () => {
    const customTheme = {
      iconFontPrefix: 'super'
    };
    const icon = createWithTheme(
      <ThemeProvider theme={customTheme}>
        <Icon name="example-icon" />
      </ThemeProvider>
    );

    expect(icon).toMatchSnapshot();
  });

  it('applies a class of just the icon font prefix', () => {
    const customTheme = {
      iconFontPrefix: 'super'
    };

    const icon = createWithTheme(
      <ThemeProvider theme={customTheme}>
        <Icon name="example-icon" />
      </ThemeProvider>
    );

    expect(icon).toMatchSnapshot();
  });

  ['90', '180', '270'].forEach(rotation => {
    it(`supports ${rotation} degree rotation`, () => {
      const tree = createWithTheme(<Icon {...{ rotation, name: 'my-icon' }} />);

      expect(tree).toMatchSnapshot();
    });
  });
});
