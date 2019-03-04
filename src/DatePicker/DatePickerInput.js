import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import datePickerDefaults from './datePickerDefaults';
import DatePickerInputOverlay from './DatePickerInputOverlay';
import Input from '../Input';

const DatePickerInput = ({ dayPickerProps, ...props }) => (
  <DayPickerInput
    component={Input}
    overlayComponent={DatePickerInputOverlay}
    dayPickerProps={{
      ...datePickerDefaults,
      ...dayPickerProps
    }}
    {...props}
  />
);

export default DatePickerInput;
