import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../Avatar';
import colorForString from '../../utils/colorForString';
import createWithTheme from '../../../utils/createWithTheme';

jest.mock('../../utils/colorForString.js');

describe('<Avatar />', () => {
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

  describe('background color', () => {
    it('is calculated by the name property', () => {
      colorForString.mockReturnValue('blue');
      const avatar = shallow(<Avatar name="Batman" />);

      expect(avatar.find('StyledAvatar')).toHaveProp({
        bg: 'blue'
      });
    });
  });
});
