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
            baseColor="palette.blue.default"
            size="default"
            subtle={false}
            theme={theme}
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
          <StyledAvatarText
            baseColor="palette.blue.default"
            size="default"
            subtle
            theme={theme}
          />
        );

        expect(avatar.find('Text')).toHaveProp({
          color: 'palette.blue.default'
        });
      });
    });
  });
});
