import React from 'react';

import StyledDateTimePicker from './StyledDateTimePicker';
import dateTimePickerDefaults from './dateTimePickerDefaults';

const DateTimePicker = props => (
  <StyledDateTimePicker {...dateTimePickerDefaults} {...props} />
);

export default DateTimePicker;
