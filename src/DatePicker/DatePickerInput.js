import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import datePickerDefaults from './datePickerDefaults';
import DatePickerInputOverlay from './DatePickerInputOverlay';
import Input from '../Input/Input';

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

DatePickerInput.propTypes = {
  dayPickerProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

DatePickerInput.defaultProps = {
  dayPickerProps: {}
};

export default DatePickerInput;
