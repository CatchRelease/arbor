import React from 'react';
import { shallow } from 'enzyme';

import colorForString from '../../utils/colorForString';

import StyledMultiValue from '../StyledMultiValue';

jest.mock('../../utils/colorForString.js');

const noop = () => null;

describe('<StyledMultiValue />', () => {
  it('uses colorForString to determine badge color', () => {
    colorForString.mockReturnValue('green');
    const props = {
      data: {
        label: 'Apples'
      },
      removeProps: {
        onClick: noop,
        onMouseDown: noop,
        onTouchEnd: noop
      }
    };

    const wrapper = shallow(<StyledMultiValue {...props} />);

    expect(wrapper.find('Badge')).toHaveProp({ paletteColor: 'green' });
  });
});
