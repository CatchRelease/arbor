import { shallow } from 'enzyme';
import { DayPickerInputProps } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import createWithTheme from '../../../utils/createWithTheme';
import DatePickerInput from '../DatePickerInput';

describe('<DatePickerInput />', () => {
  it('properly renders a DatePicker', () => {
    const tree = createWithTheme(
      <DatePickerInput
        placeholder="lol"
        inputProps={{ id: 'date-picker-input' }}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  describe('props', () => {
    it('passes props to the DayPickerInput', () => {
      const datePickerInput = shallow(
        <DatePickerInput
          placeholder="lol"
          inputProps={{ id: 'date-picker-input' }}
        />
      );

      expect(datePickerInput.find('DayPickerInput')).toHaveProp({
        placeholder: 'lol'
      });
    });

    it('passes dayPickerProps into the dayPickerProps prop', () => {
      const datePickerInput = shallow(
        <DatePickerInput
          dayPickerProps={{ className: 'foo' }}
          inputProps={{ id: 'date-picker-input' }}
        />
      );

      expect(
        datePickerInput.find<DayPickerInputProps>(DayPickerInput).props()
          .dayPickerProps?.className
      ).toEqual('foo');
    });

    it('allows overriding autoComplete', () => {
      const tree = createWithTheme(
        <DatePickerInput
          placeholder="lol"
          inputProps={{ id: 'date-picker-input', autoComplete: 'on' }}
        />
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
