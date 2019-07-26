import React from 'react';
import { shallow } from 'enzyme';

import mountWithTheme from '../../../utils/mountWithTheme';

import DateTimePicker from '../DateTimePicker';

// Explicitly set the value of today to a specific date so tests don't fail every time the day, month, or year changes
const today = new Date('2019-03-11T04:00:00.000Z');

describe('<DateTimePicker />', () => {
  it('properly renders a DateTimePicker', () => {
    const tree = mountWithTheme(<DateTimePicker value={today} />);

    expect(tree).toMatchSnapshot();
  });

  describe('props', () => {
    it('passes props along to the StyledDateTimePicker', () => {
      const dateTimePicker = shallow(
        <DateTimePicker value={today} foo="bar" />,
        { disableLifecycleMethods: true }
      );

      expect(dateTimePicker.find('StyledDateTimePicker')).toHaveProp({
        foo: 'bar'
      });
    });
  });
});
