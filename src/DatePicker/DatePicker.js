import React from 'react';

import datePickerDefaults from './datePickerDefaults';
import StyledDatePicker from './StyledDatePicker';

const DatePicker = props => (
  <StyledDatePicker {...datePickerDefaults} {...props} />
);

export default DatePicker;
