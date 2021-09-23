import { DayPickerProps } from 'react-day-picker';
import datePickerDefaults from './datePickerDefaults';
import StyledDatePicker from './StyledDatePicker';

const DatePicker = (props: DayPickerProps) => (
  <StyledDatePicker {...datePickerDefaults} {...props} />
);

export default DatePicker;
