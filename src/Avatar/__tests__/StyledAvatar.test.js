import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import theme from '../../theme';
import { sizes } from '../../theme/avatars';
import StyledAvatarWithTheme, { StyledAvatar } from '../StyledAvatar';

describe('<StyledAvatar />', () => {
  describe('colors', () => {
    context('subtle is false', () => {
      it('renders with default colors calculated by the name string', () => {
        const avatar = shallow(
          <StyledAvatar theme={theme} baseColor="palette.blue" subtle={false} />
        );

        expect(avatar.find('Flex')).toHaveProp({
          bg: 'palette.blue.default',
          borderColor: 'palette.blue.default'
        });
      });
    });

    context('subtle is true', () => {
      it('renders with subtle colors calculated by the name string', () => {
        const avatar = shallow(
          <StyledAvatar
            theme={theme}
            baseColor="palette.blue"
            name="Batman"
            subtle
          />
        );

        expect(avatar.find('Flex')).toHaveProp({
          bg: 'palette.blue.lighter',
          borderColor: 'palette.blue.darker'
        });
      });
    });
  });

  context('sizes', () => {
    Object.keys(sizes).forEach(size => {
      it(`renders ${size} properly`, () => {
        const tree = createWithTheme(
          <StyledAvatarWithTheme
            baseColor="palette.green"
            size={size}
            name="Bruce Wayne"
          />
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
