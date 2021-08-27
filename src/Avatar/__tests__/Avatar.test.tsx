import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import Avatar from '../Avatar';
import colorForString from '../../utils/colorForString';
import createWithTheme from '../../../utils/createWithTheme';

jest.mock('../../utils/colorForString.js');

const mockedColorForString = mocked(colorForString);

describe('<Avatar />', () => {
  beforeEach(() => {
    mockedColorForString.mockReturnValue('palette.green');
  });

  it('renders properly', () => {
    const tree = createWithTheme(<Avatar name="Bruce Wayne" />);

    expect(tree).toMatchSnapshot();
  });

  describe('initials', () => {
    it('renders capital letters for initials', () => {
      const avatar = shallow(<Avatar name="bruce wayne" />);

      expect(avatar).toHaveText('BW');
    });

    context('single word provided for name', () => {
      it('renders the first letter of the word', () => {
        const avatar = shallow(<Avatar name="Batman" />);

        expect(avatar).toHaveText('B');
      });
    });

    context('multiple words provided for name', () => {
      it('renders the first letter of each word', () => {
        const avatar = shallow(
          <Avatar name="Alfred Thaddeus Crane Pennyworth" />
        );

        expect(avatar).toHaveText('AP');
      });
    });

    context('no letters in provided name', () => {
      it('renders the name as-is', () => {
        const avatar = shallow(<Avatar name="+36" />);

        expect(avatar).toHaveText('+36');
      });
    });
  });
});
