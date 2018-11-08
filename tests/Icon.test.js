import React from 'react';
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Icon } from '../src/Icon';
import theme from '../src/theme';

describe('<Icon />', () => {
  it('renders an icon properly', () => {
    const tree = create(<Icon theme={theme} name="my-icon" />);

    expect(tree).toMatchSnapshot();
  });

  it('applies a class based off the icon name using the theme prefix', () => {
    const customTheme = {
      iconFontPrefix: 'super'
    };

    const icon = shallow(<Icon theme={customTheme} name="example-icon" />);

    expect(icon.props().className).toContain('super-example-icon');
  });

  it('applies a class of just the icon font prefix', () => {
    const customTheme = {
      iconFontPrefix: 'super'
    };

    const icon = shallow(<Icon theme={customTheme} name="example-icon" />);

    expect(icon.props().className).toContain('super');
  });

  ['90', '180', '270'].forEach(rotation => {
    it(`supports ${rotation} degree rotation`, () => {
      const tree = create(<Icon {...{ rotation, theme, name: 'my-icon' }} />);

      expect(tree).toMatchSnapshot();
    });
  });
});
