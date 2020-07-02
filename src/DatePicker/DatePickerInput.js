import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import datePickerDefaults from './datePickerDefaults';
import DatePickerInputOverlay from './DatePickerInputOverlay';
import Input from '../Input';

const defaultInputProps = {
  autoComplete: 'off'
};

const DatePickerInput = ({ dayPickerProps, inputProps, ...props }) => (
  <DayPickerInput
    component={Input}
    overlayComponent={DatePickerInputOverlay}
    dayPickerProps={{
      ...datePickerDefaults,
      ...dayPickerProps
    }}
    inputProps={{
      ...defaultInputProps,
      ...inputProps
    }}
    {...props}
  />
);

DatePickerInput.propTypes = {
  dayPickerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  inputProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

DatePickerInput.defaultProps = {
  dayPickerProps: {},
  inputProps: {}
};

export default DatePickerInput;
