import { DatetimepickerProps } from 'react-datetime';

import StyledDateTimePicker from './StyledDateTimePicker';
import dateTimePickerDefaults from './dateTimePickerDefaults';

const DateTimePicker = (props: DatetimepickerProps) => (
  <StyledDateTimePicker {...dateTimePickerDefaults} {...props} />
);

export default DateTimePicker;
