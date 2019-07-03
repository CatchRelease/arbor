import React from 'react';
import { shallow } from 'enzyme';

import theme from '../../theme';
import { StyledAvatarText } from '../StyledAvatarText';

describe('<StyledAvatar />', () => {
  describe('colors', () => {
    context('subtle is false', () => {
      it('renders with default colors calculated by the name string', () => {
        const avatar = shallow(
          <StyledAvatarText
            theme={theme}
            baseColor="palette.blue"
            subtle={false}
          />
        );

        expect(avatar.find('Text')).toHaveProp({
          color: 'monochrome.white'
        });
      });
    });

    context('subtle is true', () => {
      it('renders with subtle colors calculated by the name string', () => {
        const avatar = shallow(
          <StyledAvatarText theme={theme} baseColor="palette.blue" subtle />
        );

        expect(avatar.find('Text')).toHaveProp({
          color: 'palette.blue.darker'
        });
      });
    });
  });
});
