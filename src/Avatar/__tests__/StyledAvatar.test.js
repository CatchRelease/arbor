import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import theme from '../../theme';
import { sizes } from '../../theme/avatars';
import Flex from '../../Flex';
import StyledAvatarWithTheme, { StyledAvatar } from '../StyledAvatar';

describe('<StyledAvatar />', () => {
  describe('colors', () => {
    context('subtle is false', () => {
      it('renders with default colors calculated by the name string', () => {
        const avatar = shallow(
          <StyledAvatar
            baseColor="palette.blue.default"
            border="1px solid"
            size="default"
            subtle={false}
            theme={theme}
          />
        );

        expect(avatar.find(Flex)).toHaveProp({
          bg: 'palette.blue.default',
          borderColor: 'palette.blue.default'
        });
      });
    });

    context('subtle is true', () => {
      it('renders with subtle colors calculated by the name string', () => {
        const avatar = shallow(
          <StyledAvatar
            baseColor="palette.blue.default"
            border="1px solid"
            name="Batman"
            size="default"
            subtle
            theme={theme}
          />
        );

        expect(avatar.find(Flex)).toHaveProp({
          bg: 'monochrome.white',
          borderColor: 'palette.blue.default'
        });
      });
    });
  });

  context('sizes', () => {
    Object.keys(sizes).forEach((size) => {
      it(`renders ${size} properly`, () => {
        const tree = createWithTheme(
          <StyledAvatarWithTheme
            baseColor="palette.green.default"
            border="1px solid"
            name="Bruce Wayne"
            size={size}
            subtle={false}
            theme={theme}
          />
        );

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
