import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import createWithTheme from '../../../utils/createWithTheme';
import mountWithTheme from '../../../utils/mountWithTheme';
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

  ['90', '180', '270'].forEach((rotation) => {
    it(`supports ${rotation} degree rotation`, () => {
      const tree = createWithTheme(<Icon {...{ rotation, name: 'my-icon' }} />);

      expect(tree).toMatchSnapshot();
    });
  });

  it('sets arbor icon class names', () => {
    const wrapper = mountWithTheme(<Icon name="test-icon-name" />);

    expect(wrapper.find('StyledIcon')).toHaveClassName('ar ar-test-icon-name');
  });

  it('does not clobber arbor icon class names when passing css prop', () => {
    const wrapper = mountWithTheme(
      <Icon css={{ cursor: 'pointer' }} name="test-icon-name" />
    );

    expect(wrapper.find('StyledIcon')).toHaveClassName('ar ar-test-icon-name');
  });

  it('forwards ref', () => {
    const ref = React.createRef();

    const wrapper = mountWithTheme(<Icon name="test-icon-name" ref={ref} />);

    expect(ref.current).toBe(wrapper.find('StyledIcon').getDOMNode());
  });
});
