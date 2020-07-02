import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import DatePickerInput from '../DatePickerInput';

describe('<DatePickerInput />', () => {
  it('properly renders a DatePicker', () => {
    const tree = createWithTheme(
      <DatePickerInput foo="bar" inputProps={{ id: 'date-picker-input' }} />
    );

    expect(tree).toMatchSnapshot();
  });

  describe('props', () => {
    it('passes props to the DayPickerInput', () => {
      const datePickerInput = shallow(
        <DatePickerInput foo="bar" inputProps={{ id: 'date-picker-input' }} />
      );

      expect(datePickerInput.find('DayPickerInput')).toHaveProp({
        foo: 'bar'
      });
    });

    it('passes dayPickerProps into the dayPickerProps prop', () => {
      const datePickerInput = shallow(
        <DatePickerInput
          dayPickerProps={{ foo: 'bar' }}
          inputProps={{ id: 'date-picker-input' }}
        />
      );

      expect(
        datePickerInput.find('DayPickerInput').props().dayPickerProps.foo
      ).toEqual('bar');
    });

    it('allows overriding autoComplete', () => {
      const tree = createWithTheme(
        <DatePickerInput
          foo="bar"
          inputProps={{ id: 'date-picker-input', autoComplete: 'on' }}
        />
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
