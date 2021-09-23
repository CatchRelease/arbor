import { FC } from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import datePickerDefaults from './datePickerDefaults';
import DatePickerInputOverlay from './DatePickerInputOverlay';
import Input, { InputProps } from '../Input';

const defaultInputProps = {
  autoComplete: 'off'
};

type Props = Omit<DayPickerInputProps, 'inputProps'> & {
  inputProps?: InputProps;
};

const DatePickerInput: FC<Props> = ({
  dayPickerProps = {},
  inputProps = {},
  ...props
}) => (
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

export default DatePickerInput;
