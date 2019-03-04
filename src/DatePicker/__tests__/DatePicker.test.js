import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import DatePicker from '../DatePicker';

describe('<DatePicker />', () => {
  it('properly renders a DatePicker', () => {
    const tree = createWithTheme(<DatePicker />);

    expect(tree).toMatchSnapshot();
  });

  describe('props', () => {
    it('passes props along to the StyledDatePicker', () => {
      const datePicker = shallow(<DatePicker foo="bar" />);

      expect(datePicker.find('StyledDatePicker')).toHaveProp({
        foo: 'bar'
      });
    });
  });
});
