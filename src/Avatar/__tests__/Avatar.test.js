import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../Avatar';
import colorForString from '../../utils/colorForString';
import createWithTheme from '../../../utils/createWithTheme';

jest.mock('../../utils/colorForString.js');

describe('<Avatar />', () => {
  beforeEach(() => {
    colorForString.mockReturnValue('palette.green');
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
  });

  describe('colors', () => {
    context('subtle is false', () => {
      it('renders with default colors calculated by the name string', () => {
        colorForString.mockReturnValue('palette.blue');
        const avatar = shallow(<Avatar name="Batman" subtle={false} />);

        expect(avatar.find('StyledAvatar')).toHaveProp({
          bg: 'palette.blue.default',
          borderColor: 'palette.blue.default'
        });

        expect(avatar.find('Text')).toHaveProp({
          color: 'monochrome.white'
        });
      });
    });

    context('subtle is true', () => {
      it('renders with subtle colors calculated by the name string', () => {
        colorForString.mockReturnValue('palette.blue');
        const avatar = shallow(<Avatar name="Batman" subtle />);

        expect(avatar.find('StyledAvatar')).toHaveProp({
          bg: 'palette.blue.lighter',
          borderColor: 'palette.blue.darker'
        });

        expect(avatar.find('Text')).toHaveProp({
          color: 'palette.blue.darker'
        });
      });
    });
  });
});
