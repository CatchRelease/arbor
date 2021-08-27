import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import theme from '../../theme';
import Flex from '../../Flex';
import StyledAvatarWithTheme, { StyledAvatar } from '../StyledAvatar';

describe('<StyledAvatar />', () => {
  describe('colors', () => {
    context('subtle is false', () => {
      it('renders bg and border colors equal to baseColor', () => {
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
      it('renders a white bg and border color equal to baseColor', () => {
        const avatar = shallow(
          <StyledAvatar
            baseColor="palette.blue.default"
            border="1px solid"
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
    (['default', 'medium'] as const).forEach((size) => {
      it(`renders ${size} properly`, () => {
        const tree = createWithTheme(
          <StyledAvatarWithTheme
            baseColor="palette.green.default"
            border="1px solid"
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
