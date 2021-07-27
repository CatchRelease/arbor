import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import DatePicker from '../DatePicker';
import StyledDatePicker from '../StyledDatePicker';

// Explicitly set the value of today to a specific date so tests don't fail every time the day, month, or year changes
const today = new Date('2019-03-11T04:00:00.000Z');
const modifiers = { today };

describe('<DatePicker />', () => {
  it('properly renders a DatePicker', () => {
    const tree = createWithTheme(
      <DatePicker initialMonth={today} modifiers={modifiers} />
    );

    expect(tree).toMatchSnapshot();
  });

  describe('props', () => {
    it('passes props along to the StyledDatePicker', () => {
      const datePicker = shallow(
        <DatePicker modifiers={modifiers} initialMonth={today} foo="bar" />
      );

      expect(datePicker.find(StyledDatePicker)).toHaveProp({
        foo: 'bar'
      });
    });
  });
});
